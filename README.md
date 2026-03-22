# 🎫 SGS — Sistema de Gerenciamento de Senhas

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=flat-square&logo=netlify)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

> Landing Page de Alta Conversão para o produto SGS — Solução completa de gestão de filas e senhas para Órgãos Públicos, Clínicas e Hospitais.

---

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite 6** (Build tool)
- **Tailwind CSS 4** (Estilização)
- **Motion** (Animações - Framer Motion)
- **Lucide React** (Ícones)
- **Netlify Functions** (Backend serverless)
- **FormSubmit.co** (Formulários por email)

---

## ⚙️ Pré-requisitos

- Node.js 18+
- npm 9+

---

## ⚡ Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/megatecnologia/sgs-landing.git

# 2. Entrar no diretório
cd sgs-landing

# 3. Instalar dependências
npm install

# 4. Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do Telegram
```

---

## �开发 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar tipos TypeScript
npm run lint

# Visualizar preview do build
npm run preview
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deploy (Netlify)

O projeto está configurado para deploy automático via Netlify.

1. Conecte o repositório no Netlify
2. Configure as variáveis de ambiente:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. O deploy será feito automaticamente

---

## 📁 Estrutura do Projeto

```
sgs-landing/
├── src/
│   ├── App.tsx              # Componente principal (Landing Page)
│   ├── useTracker.ts        # Hook de rastreamento de eventos
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais e variáveis de tema
├── netlify/
│   └── functions/
│       └── telegram.ts       # Função serverless para Telegram
├── .env.example              # Template de variáveis de ambiente
├── netlify.toml              # Configuração de deploy
├── tsconfig.json             # Configurações TypeScript
├── vite.config.ts            # Configurações Vite
└── CONTRIBUTING.md           # Guia de contribuição
```

---

## 🔔 Integrações

| Serviço | Propósito |
|---------|-----------|
| **Telegram Bot** | Notificações em tempo real de leads e eventos |
| **FormSubmit.co** | Envio de formulários por email |
| **ipapi.co** | Geolocalização de visitantes |

---

## 📊 Sistema de Rastreamento

O hook `useTracker.ts` monitora e notifica via Telegram:

- **page_open** — Abertura da página
- **saw_pricing** — Visitou seção de preços
- **scrolled_to_end** — Chegou ao final da página
- **cta_whatsapp_click** — Clicou no WhatsApp
- **cta_form_submit** — Enviou formulário de orçamento
- **Dispositivo e OS** do visitante

---

## 🔐 Segurança

Este projeto segue boas práticas de segurança:

- **Content Security Policy (CSP)** configurada no index.html
- **Strict TypeScript** com verificação de tipos
- **Validação server-side** na função Telegram
- **Sanitização de dados** do usuário
- **Limitação de tamanho** de mensagens

Consulte [SECURITY.md](SECURITY.md) para mais detalhes.

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

---

## 🏢 Sobre

Desenvolvido por **Mega Tecnologia**

- 🌐 Site: [megatecnologia.com](https://megatecnologia.com)
- 📧 Email: comercial@megatecnologia.com
- 📱 WhatsApp: (98) 9 8344-4737