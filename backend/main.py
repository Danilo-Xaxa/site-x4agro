from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import resend
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv()

# Configurar Resend
resend.api_key = os.getenv("RESEND_API_KEY")

app = FastAPI(
    title="X4AGRO API",
    description="API para o site institucional X4AGRO",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # React dev
        "http://localhost:5173",  # Vite dev
        "https://x4agrocompliance.com",  # Produção
        "https://www.x4agrocompliance.com",  # Produção com www
        "https://x4agro.vercel.app",  # Vercel principal
        "https://*.vercel.app",  # Preview deployments Vercel
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContatoRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Nome completo")
    email: EmailStr = Field(..., description="E-mail válido")
    phone: Optional[str] = Field(None, max_length=20, description="Telefone com máscara")
    propriedade: Optional[str] = Field(None, max_length=100, description="Nome da propriedade")
    message: Optional[str] = Field(None, max_length=1000, description="Mensagem opcional")


@app.get("/")
async def root():
    return {
        "message": "X4AGRO API",
        "version": "1.0.0",
        "status": "online"
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/contato")
async def enviar_contato(contato: ContatoRequest):
    """
    Endpoint para processar formulário de contato.
    Envia e-mail via Resend para o time da X4AGRO.
    """
    try:
        # Validar se API key está configurada
        if not resend.api_key:
            raise HTTPException(
                status_code=500,
                detail="API key do Resend não configurada"
            )

        # Montar corpo do e-mail
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
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Novo contato do site</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">Nome:</span>
                            <span class="value">{contato.name}</span>
                        </div>
                        <div class="field">
                            <span class="label">E-mail:</span>
                            <span class="value"><a href="mailto:{contato.email}">{contato.email}</a></span>
                        </div>
                        {f'<div class="field"><span class="label">Telefone:</span><span class="value">{contato.phone}</span></div>' if contato.phone else ''}
                        {f'<div class="field"><span class="label">Propriedade:</span><span class="value">{contato.propriedade}</span></div>' if contato.propriedade else ''}
                        {f'<div class="field"><span class="label">Mensagem:</span><span class="value">{contato.message}</span></div>' if contato.message else ''}
                    </div>
                    <div class="footer">
                        <p>Este e-mail foi enviado através do formulário de contato em x4agrocompliance.com</p>
                    </div>
                </div>
            </body>
        </html>
        """

        # Enviar e-mail via Resend
        params = {
            "from": os.getenv("FROM_EMAIL", "noreply@x4agrocompliance.com"),
            "to": [os.getenv("CONTACT_EMAIL", "contato@x4agrocompliance.com")],
            "subject": f"[X4AGRO] Novo contato de {contato.name}",
            "html": html_body,
            "reply_to": contato.email,
        }

        email_response = resend.Emails.send(params)

        return {
            "success": True,
            "message": "Contato enviado com sucesso!",
            "email_id": email_response.get("id")
        }

    except resend.exceptions.ResendError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao enviar e-mail via Resend: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro interno: {str(e)}"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
