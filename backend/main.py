import os
import logging
from typing import Optional

import requests as http_requests
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr, Field
from html import escape
from pathlib import Path
from dotenv import load_dotenv

# =========================================================
# ENV
# =========================================================
# .env fica na raiz do projeto (um nível acima de backend/)
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

RESEND_API_KEY = os.getenv("RESEND_API_KEY")
FROM_EMAIL = os.getenv("FROM_EMAIL", "contato@x4payassessoria.com")
CONTACT_EMAIL = os.getenv("CONTACT_EMAIL", "contato@x4payassessoria.com")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

if not RESEND_API_KEY:
    raise RuntimeError("RESEND_API_KEY não definido no .env")

# =========================================================
# LOGGING
# =========================================================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[logging.FileHandler("backend.log"), logging.StreamHandler()],
)

logger = logging.getLogger(__name__)

# =========================================================
# FASTAPI
# =========================================================
app = FastAPI(
    title="X4AGRO API",
    description="API para o site institucional X4AGRO",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "https://x4agrocompliance.com",
        "https://www.x4agrocompliance.com",
        "https://x4agro.vercel.app",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# MODELS
# =========================================================
class ContatoRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Nome completo")
    email: EmailStr = Field(..., description="E-mail válido")
    phone: Optional[str] = Field(None, max_length=20, description="Telefone com máscara")
    propriedade: Optional[str] = Field(None, max_length=100, description="Nome da propriedade")
    message: Optional[str] = Field(None, max_length=1000, description="Mensagem opcional")


# =========================================================
# UTIL — ENVIO VIA RESEND (HTTP)
# =========================================================
def send_email_resend(subject: str, html: str, reply_to: str):
    response = http_requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {RESEND_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "from": FROM_EMAIL,
            "to": [CONTACT_EMAIL],
            "subject": subject,
            "html": html,
            "reply_to": reply_to,
        },
        timeout=15,
    )

    if response.status_code >= 400:
        logger.error("Erro Resend: %s", response.text)
        raise RuntimeError(f"Falha ao enviar e-mail: {response.status_code}")

    return response.json()


# =========================================================
# MIDDLEWARE LOG
# =========================================================
@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info("[%s] %s %s", request.client.host, request.method, request.url)
    response = await call_next(request)
    logger.info("Resposta enviada: %s", response.status_code)
    return response


# =========================================================
# ROTAS
# =========================================================
@app.get("/")
async def root():
    return JSONResponse(
        content={
            "mensagem": "API da X4AGRO",
            "versão": "1.0",
            "status": "online",
        },
        media_type="application/json; charset=utf-8",
    )


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/contato")
async def enviar_contato(contato: ContatoRequest):
    logger.info("Novo contato: %s (%s)", contato.name, contato.email)

    safe_name = escape(contato.name)
    safe_email = escape(contato.email)
    safe_phone = escape(contato.phone) if contato.phone else None
    safe_propriedade = escape(contato.propriedade) if contato.propriedade else None
    safe_message = escape(contato.message) if contato.message else None

    html_body = f"""
    <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #1A1A1A; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #2A5936 0%, #3B8C4A 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
                .content {{ background: #F2F2F2; padding: 30px; border-radius: 0 0 8px 8px; }}
                .field {{ margin-bottom: 20px; }}
                .label {{ font-weight: bold; color: #2A5936; display: block; margin-bottom: 5px; }}
                .value {{ color: #1A1A1A; }}
                .footer {{ margin-top: 30px; text-align: center; color: #666; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1 style="margin: 0; font-size: 28px;">X4AGRO</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Novo contato do site da X4AGRO</p>
                </div>
                <div class="content">
                    <div class="field">
                        <span class="label">Nome:</span>
                        <span class="value">{safe_name}</span>
                    </div>
                    <div class="field">
                        <span class="label">E-mail:</span>
                        <span class="value"><a href="mailto:{safe_email}">{safe_email}</a></span>
                    </div>
                    {f'<div class="field"><span class="label">Telefone:</span><span class="value">{safe_phone}</span></div>' if safe_phone else ''}
                    {f'<div class="field"><span class="label">Propriedade:</span><span class="value">{safe_propriedade}</span></div>' if safe_propriedade else ''}
                    {f'<div class="field"><span class="label">Mensagem:</span><span class="value">{safe_message}</span></div>' if safe_message else ''}
                </div>
                <div class="footer">
                    <p>Este e-mail foi enviado através do formulário de contato em x4agrocompliance.com</p>
                </div>
            </div>
        </body>
    </html>
    """

    try:
        result = send_email_resend(
            subject=f"Novo contato via site da X4AGRO",
            html=html_body,
            reply_to=contato.email,
        )

        logger.info("E-mail enviado com sucesso (Resend).")

        return {
            "success": True,
            "message": "Contato enviado com sucesso!",
            "email_id": result.get("id"),
        }

    except Exception:
        logger.exception("Erro ao enviar e-mail")
        raise HTTPException(
            status_code=500,
            detail="Erro ao enviar e-mail. Tente novamente mais tarde.",
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
