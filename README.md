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

### Backend (API compartilhada X4PAY)

O site da X4AGRO **não possui backend proprio**. O formulario de contato consome a API compartilhada da X4PAY, hospedada no Railway (`x4paywebsite-production.up.railway.app`), via rota `POST /contact_x4agro`.

### DevOps & Ferramentas

- **Vercel** - Deploy frontend
- **Railway** - Backend compartilhado da X4PAY (API unica para ambos os sites)
- **HostGator** - Dominio `x4agrocompliance.com`
- **Resend** - E-mails transacionais (via conta X4PAY)
- **Git** - Controle de versao

---

## 📁 Estrutura do Projeto

```
site-x4agro/
├── public/                    # Arquivos públicos
│   ├── index.html            # HTML base (SEO + Open Graph)
│   ├── favicon.ico           # Favicon
│   └── logos/
│       └── x4agro-logo.svg  # Logo vetorial (X4 #8dcd36 + AGRO branco)
│
├── src/                      # Código-fonte React
│   ├── components/           # Componentes React
│   │   ├── Navbar.jsx       # Navbar com active state + logo SVG
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

### 2. Setup

```bash
# Instalar dependencias
npm install

# Configurar variaveis de ambiente
cp .env.example .env
```

O `.env` ja vem configurado para apontar para a API da X4PAY em producao. Para desenvolvimento local, altere `REACT_APP_API_URL` se necessario.

---

## 🛠️ Desenvolvimento

### Rodar Frontend

```bash
npm start
```

Acesse: `http://localhost:3000`

O frontend ja aponta para a API da X4PAY em producao (`x4paywebsite-production.up.railway.app`), entao o formulario de contato funciona mesmo em dev local.

### Scripts disponiveis

```bash
npm start          # Dev server com hot reload
npm run build      # Build de producao
npm test           # Rodar testes
```

---

## 🚢 Deploy

### Frontend (Vercel)

1. Conecte o repositorio GitHub no [Vercel](https://vercel.com)
2. Configure build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
3. Adicione variavel de ambiente:
   - `REACT_APP_API_URL`: `https://x4paywebsite-production.up.railway.app`
4. Custom Domain: `x4agrocompliance.com`

### Backend

Nao e necessario deploy de backend. O site usa a **API compartilhada da X4PAY** (`x4paywebsite-production.up.railway.app`) que ja esta no ar no Railway. O CORS ja esta configurado para aceitar requisicoes dos dominios da X4AGRO.

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
- [x] **SEO** - Meta tags otimizadas + Open Graph + Twitter Card
- [x] **Logo SVG** - Logo vetorial customizado (X4 verde-limão + AGRO branco)
- [x] **API Backend** - API compartilhada da X4PAY (rota `/contact_x4agro`)
- [x] **Deploy Config** - Vercel (frontend) + Railway (backend X4PAY)

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
