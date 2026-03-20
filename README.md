# 🎫 SGS — Sistema de Gerenciamento de Senhas

**Landing Page de Alta Conversão** para o produto SGS, desenvolvida pela Mega Tecnologia.

> Solução completa de gestão de filas e senhas para Órgãos Públicos, Clínicas e Hospitais.

---

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **Motion (Framer Motion)**
- **Lucide React** (ícones)
- **Netlify Functions** (backend serverless para Telegram)
- **FormSubmit.co** (envio de formulários por email)

---

## ⚙️ Rodando Localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com seu TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deploy (Netlify)

O projeto está configurado para deploy automático via Netlify.

```bash
# Build de produção
npm run build
```

O arquivo `netlify.toml` já contém toda a configuração de deploy e redirecionamento das funções serverless.

---

## 📁 Estrutura do Projeto

```
lpsgs/
├── src/
│   ├── App.tsx           # Componente principal (Landing Page)
│   ├── useTracker.ts     # Hook de rastreamento e notificações Telegram
│   ├── index.css         # Estilos globais e variáveis de design
│   └── main.tsx          # Entry point da aplicação
├── netlify/
│   └── functions/
│       └── telegram.ts   # Função serverless para notificações Telegram
├── plano/                # Documentação de planejamento da LP
├── .env.example          # Template de variáveis de ambiente
└── netlify.toml          # Configuração de deploy Netlify
```

---

## 🔔 Integrações

| Integração | Propósito |
|---|---|
| **Telegram Bot** | Notificações em tempo real de leads e eventos |
| **FormSubmit.co** | Envio de formulários por email |
| **ipapi.co** | Geolocalização de visitantes |

---

## 📊 Sistema de Rastreamento

O `useTracker.ts` monitora e notifica via Telegram:

- **Abertura de página** (`page_open`)
- **Rolagem até o final** (`scrolled_to_end`)
- **Clique no WhatsApp** (`cta_whatsapp_click`)
- **Envio do formulário** (`cta_form_submit`)
- **Dispositivo e OS** do visitante (Windows, macOS, Android, iOS, etc.)

---

## 🏢 Sobre

Desenvolvido por **Mega Tecnologia** · [comercial@megatecnologia.com](mailto:comercial@megatecnologia.com)
