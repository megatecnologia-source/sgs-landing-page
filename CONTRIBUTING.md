# Contributing

Este projeto é uma landing page institucional para o Sistema de Gerenciamento de Senhas (SGS) da Mega Tecnologia.

## Como Contribuir

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sgs-landing.git

# Entre no diretório
cd sgs-landing

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Executar build de produção
npm run build

# Verificar tipos TypeScript
npm run lint
```

### Estrutura do Projeto

```
src/
├── App.tsx           # Componente principal da Landing Page
├── useTracker.ts     # Hook de rastreamento de eventos
├── main.tsx          # Ponto de entrada da aplicação
└── index.css         # Estilos globais eテーマ
```

### Boas Práticas

- Utilize TypeScript para tudo
- Siga as convenções do projeto
- Execute `npm run lint` antes de fazer commit
- Mantenha os componentes kecil e reutilizáveis
- Documente funções complexas com JSDoc quando necessário

### Commit Messages

Siga o padrão Conventional Commits:

- `feat:`Nova funcionalidade
- `fix:`Correção de bug
- `docs:`Documentação
- `style:`Formatação
- `refactor:`Refatoração
- `test:`Testes
- `chore:`Tarefas gerais

## Licença

MIT