# Security Policy

## Reporting Vulnerabilities

Se você encontrar uma vulnerabilidade de segurança neste projeto, por favor, envie um e-mail para comercial@megatecnologia.com.

## escopo de Segurança

### O que cobrimos

- Proteção contra XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- Vazamento de dados sensíveis
- Injeção de código
- Autenticação e autorização

### O que não cobrimos

- Engenharia social
- Ataques de força bruta (use rate limiting no lado do servidor)
- Problemas de infraestrutura (use HTTPS, firewall, etc.)

## Boas Práticas de Segurança

### Para Desenvolvedores

1. **Nunca exponha credenciais no frontend**
   - Use variáveis de ambiente do lado do servidor
   - Não faça commit de tokens ou chaves de API

2. **Valide sempre os dados**
   - Validação server-side de todos os inputs
   - Sanitização de dados do usuário

3. **Content Security Policy**
   - Mantenha a CSP configurada no index.html
   - Não use 'unsafe-inline' desnecessariamente

4. **Dependências atualizadas**
   - Mantenha o package.json atualizado
   - Execute auditorias de segurança regularmente

### Variáveis de Ambiente

Configure as seguintes variáveis no seu ambiente de produção:

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=seu_token_aqui
TELEGRAM_CHAT_ID=seu_chat_id_aqui
```

## Histórico de Segurança

| Versão | Tipo | Descrição |
|--------|------|-----------|
| 1.0.0 | Lançamento | Versão inicial com correções de segurança |

## Atualizações

Este documento pode ser atualizado. Para versões principais,我们会notificar via GitHub Releases.