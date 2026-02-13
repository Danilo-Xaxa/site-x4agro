# X4AGRO Backend API

Backend FastAPI para processar formulário de contato do site X4AGRO.

## Stack

- **FastAPI** - Framework web moderno e rápido
- **Resend** - Serviço de envio de e-mails transacionais
- **Uvicorn** - Servidor ASGI de alta performance
- **Pydantic** - Validação de dados

## Setup

### 1. Criar ambiente virtual

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 2. Instalar dependências

```bash
pip install -r requirements.txt
```

### 3. Configurar variáveis de ambiente

Copie `.env.example` para `.env` e configure:

```bash
cp .env.example .env
```

Edite `.env` e adicione:

```env
# Obtenha sua API key em https://resend.com/api-keys
RESEND_API_KEY=re_sua_key_aqui

# E-mail de destino (quem receberá os contatos)
CONTACT_EMAIL=contato@x4payassessoria.com

# E-mail remetente (precisa ser do domínio verificado na Resend)
FROM_EMAIL=noreply@x4payassessoria.com

ENVIRONMENT=development
```

### 4. Configurar domínio na Resend

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta ou faça login
3. Vá em **Domains** e adicione `x4payassessoria.com`
4. Configure os registros DNS (MX, TXT, CNAME) conforme instruções da Resend
5. Aguarde verificação (pode levar alguns minutos)

### 5. Rodar o servidor

```bash
# Desenvolvimento (hot reload ativo)
python main.py

# Ou usando uvicorn direto
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

API estará disponível em: `http://localhost:8000`

Documentação interativa: `http://localhost:8000/docs`

## Endpoints

### `GET /`
Retorna informações da API

### `GET /health`
Health check do servidor

### `POST /api/contato`
Envia formulário de contato

**Request Body:**
```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "phone": "(81) 98814-3087",
  "propriedade": "Fazenda São José",
  "message": "Gostaria de mais informações sobre compliance"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contato enviado com sucesso!",
  "email_id": "re_abc123xyz"
}
```

**Response (500):**
```json
{
  "detail": "Erro ao enviar e-mail via Resend: ..."
}
```

## Deploy

### Vercel

1. Instale Vercel CLI:
```bash
npm i -g vercel
```

2. Na raiz do backend:
```bash
vercel
```

3. Configure as variáveis de ambiente no dashboard da Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`

### Render / Railway / Fly.io

Todas essas plataformas suportam FastAPI nativamente. Basta:
1. Conectar o repositório
2. Definir `python main.py` como comando de start
3. Configurar as env vars

## CORS

O backend já está configurado para aceitar requisições de:
- `http://localhost:3000` (React dev)
- `https://x4agro.vercel.app` (produção - ajustar URL)
- `https://*.vercel.app` (preview deployments)

Se mudar o domínio de produção, atualize a lista em `main.py`.

## Testes

```bash
# Testar endpoint health
curl http://localhost:8000/health

# Testar envio de contato
curl -X POST http://localhost:8000/api/contato \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@exemplo.com",
    "phone": "(11) 99999-9999",
    "message": "Teste de integração"
  }'
```

## Estrutura

```
backend/
├── main.py              # Aplicação FastAPI
├── requirements.txt     # Dependências Python
├── .env                 # Variáveis de ambiente (não commitado)
├── .env.example         # Template de .env
├── .gitignore          # Git ignore
└── README.md           # Esta documentação
```

## Troubleshooting

### Erro: "API key do Resend não configurada"
- Verifique se o arquivo `.env` existe
- Confirme que `RESEND_API_KEY` está definida corretamente

### Erro: "Domain not verified"
- Acesse o dashboard da Resend
- Verifique se todos os registros DNS foram configurados
- Aguarde alguns minutos para propagação DNS

### CORS error no frontend
- Verifique se a URL do frontend está na lista `allow_origins`
- Confirme que o backend está rodando
