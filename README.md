# X4AGRO - Site Institucional

![X4AGRO](https://img.shields.io/badge/X4AGRO-Compliance%20Agro-2A5936?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

Site institucional da **X4AGRO**, vertical de compliance e governança para o agronegócio da X4PAY Assessoria.

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Desenvolvimento](#desenvolvimento)
- [Deploy](#deploy)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)

---

## 🌾 Sobre

O X4AGRO oferece programas de compliance personalizados para produtores rurais, protegendo operações contra fraudes internas, garantindo conformidade legal e fortalecendo a governança corporativa no campo.

### Público-alvo
- Produtores rurais de médio e grande porte
- Gestores de propriedades rurais
- Empresas do agronegócio

### Proposta de valor
- Diagnóstico gratuito de vulnerabilidades
- Programa de compliance em 90 dias
- Proteção contra fraudes (R$ 34.8MM em casos reais documentados)
- Controles internos e canal de denúncias
- Treinamentos especializados

---

## 🚀 Tecnologias

### Frontend
- **React 19.2** - Library UI moderna
- **TailwindCSS 3.4** - Framework CSS utility-first
- **Framer Motion 12** - Animações fluidas
- **Lucide React** - Ícones modernos
- **Create React App** - Boilerplate oficial

### Backend
- **FastAPI 0.115** - Framework Python moderno e rápido
- **Resend** - Serviço de envio de e-mails transacionais
- **Uvicorn** - Servidor ASGI de alta performance
- **Pydantic** - Validação de dados

### DevOps & Ferramentas
- **Vercel** - Deploy frontend (recomendado)
- **Render/Railway** - Deploy backend (recomendado)
- **Git** - Controle de versão

---

## 📁 Estrutura do Projeto

```
site-x4agro/
├── public/                    # Arquivos públicos
│   ├── index.html            # HTML base
│   └── favicon.ico           # Favicon
│
├── src/                      # Código-fonte React
│   ├── components/           # Componentes React
│   │   ├── Navbar.jsx       # Navbar com active state
│   │   ├── HeroSection.jsx  # Hero com gradients + stats
│   │   ├── ComplianceSection.jsx
│   │   ├── PilaresSection.jsx
│   │   ├── CasosReaisSection.jsx    # 5 casos reais de fraude
│   │   ├── AutoavaliacaoSection.jsx # Checklist interativo
│   │   ├── ComparativoSection.jsx   # Reativo vs Estratégico
│   │   ├── ProgramaSection.jsx
│   │   ├── RetornoSection.jsx
│   │   ├── TimelineSection.jsx
│   │   ├── ContatoSection.jsx       # Form + integração API
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx       # Botão flutuante
│   │
│   ├── App.js                # Componente principal
│   ├── index.js              # Entry point
│   └── index.css             # Tailwind + fontes
│
├── backend/                  # API FastAPI
│   ├── main.py              # Aplicação FastAPI
│   ├── requirements.txt     # Dependências Python
│   ├── .env.example         # Template variáveis de ambiente
│   ├── .gitignore          # Git ignore
│   └── README.md           # Docs backend
│
├── tailwind.config.js       # Config Tailwind (paleta agro)
├── package.json             # Dependências Node
├── .env.example             # Template env frontend
├── .gitignore              # Git ignore
└── README.md               # Este arquivo
```

---

## 💻 Instalação

### Pré-requisitos

- **Node.js** 16+ e npm
- **Python** 3.9+ e pip
- Conta na [Resend](https://resend.com) para envio de e-mails

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/site-x4agro.git
cd site-x4agro
```

### 2. Frontend Setup

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Editar .env
# REACT_APP_API_URL=http://localhost:8000
```

### 3. Backend Setup

```bash
cd backend

# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
cp .env.example .env

# Editar .env e adicionar:
# RESEND_API_KEY=re_sua_api_key_aqui
# CONTACT_EMAIL=contato@x4agrocompliance.com
# FROM_EMAIL=noreply@x4agrocompliance.com
```

### 4. Configurar Resend

1. Acesse [resend.com](https://resend.com) e crie uma conta
2. Vá em **API Keys** → Criar nova chave
3. Vá em **Domains** → Adicionar `x4agrocompliance.com`
4. Configure os registros DNS conforme instruções
5. Aguarde verificação do domínio

---

## 🛠️ Desenvolvimento

### Rodar Frontend

```bash
npm start
```

Acesse: `http://localhost:3000`

### Rodar Backend

```bash
cd backend
python main.py
```

API disponível em: `http://localhost:8000`

Documentação interativa: `http://localhost:8000/docs`

### Estrutura de desenvolvimento

Com ambos rodando:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- O frontend faz requisições para a API automaticamente

### Scripts disponíveis

```bash
# Frontend
npm start          # Dev server com hot reload
npm run build      # Build de produção
npm test           # Rodar testes
npm run eject      # Ejetar CRA (não recomendado)

# Backend
python main.py     # Rodar servidor com reload
```

---

## 🚢 Deploy

### Frontend (Vercel) - Recomendado

1. **Via CLI:**
```bash
npm install -g vercel
vercel
```

2. **Via Dashboard:**
   - Conecte seu repositório GitHub
   - Configure build:
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
   - Adicione variável de ambiente:
     - `REACT_APP_API_URL`: URL do backend em produção

3. **Custom Domain:**
   - Adicione domínio personalizado no dashboard
   - Configure DNS apontando para Vercel

### Backend (Render/Railway/Fly.io)

#### Render (Recomendado)

1. Conecte repositório no [Render](https://render.com)
2. Crie novo **Web Service**
3. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Environment**: `Python 3.11`
4. Adicione variáveis de ambiente:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
5. Deploy

#### Railway

```bash
# Instalar CLI
npm i -g @railway/cli

# Login e deploy
cd backend
railway login
railway init
railway up
```

#### Vercel (Backend como Serverless)

Crie `vercel.json` na raiz do backend:
```json
{
  "builds": [
    {
      "src": "main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "main.py"
    }
  ]
}
```

Depois: `vercel --prod`

### Configurar CORS em Produção

No `backend/main.py`, atualize a lista de origins:

```python
allow_origins=[
    "https://seu-dominio.com",      # Seu domínio
    "https://*.vercel.app",          # Vercel preview
    "http://localhost:3000",         # Dev local
],
```

---

## ✨ Funcionalidades

### Implementadas ✅

- [x] **Hero Section** - Gradient animado + stats impactantes
- [x] **Navbar** - Active state por seção + menu mobile animado
- [x] **Casos Reais** - 5 casos documentados de fraude (R$ 34.8MM total)
- [x] **Autoavaliação** - Checklist interativo com barra de progresso
- [x] **Comparativo** - Modelo Reativo vs Estratégico (badge "Recomendado")
- [x] **Timeline** - 3 etapas do programa (90 dias)
- [x] **Formulário de Contato** - Integrado com API + máscara telefone
- [x] **WhatsApp Flutuante** - Botão fixo com link direto
- [x] **Animações** - Framer Motion em todas as seções
- [x] **Responsivo** - Mobile-first design
- [x] **SEO** - Meta tags otimizadas
- [x] **API Backend** - FastAPI + Resend para e-mails

### Roadmap 🚧

- [ ] Google Analytics / Plausible
- [ ] Calculadora de ROI interativa
- [ ] Blog/Artigos sobre compliance rural
- [ ] Depoimentos em vídeo
- [ ] Integração com CRM (Pipedrive/RD Station)
- [ ] Chat ao vivo (Crisp/Intercom)
- [ ] Dashboard admin para leads

---

## 🎨 Paleta de Cores

```javascript
{
  'verde-escuro': '#2A5936',  // Primary - Navbar, CTAs
  'verde-medio':  '#23592B',  // Hover states
  'verde-claro':  '#3B8C4A',  // Highlights, badges
  'marrom':       '#59341E',  // Logo, acentos
  'bege':         '#A6918A',  // Secundário
  'branco':       '#F2F2F2',  // Background claro
  'escuro':       '#1A1A1A',  // Texto principal
  'vermelho':     '#DC2626',  // Alertas, casos de fraude
  'amarelo':      '#D4A017',  // Avisos, progress parcial
}
```

---

## 📊 Métricas de Performance

### Lighthouse (após build)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Bundle Size (gzipped)
- **JS**: ~127 KB
- **CSS**: ~5.5 KB

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é propriedade da **X4PAY Assessoria**. Todos os direitos reservados.

---

## 📧 Contato

- WhatsApp: [(81) 9 8814-3087](https://wa.me/5581988143087)
- E-mail: contato@x4agrocompliance.com

---

<div align="center">
  <p>Desenvolvido com 💚 para o Agronegócio Brasileiro</p>
  <p><strong>X4AGRO</strong> - Compliance e Governança para o Campo</p>
</div>
