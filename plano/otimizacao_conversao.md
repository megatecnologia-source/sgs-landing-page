# Plano de Otimização e Conversão: SGS

Este plano detalha as melhorias focadas em converter visitantes em leads qualificados, removendo barreiras de preço fixo e melhorando o rastreamento comercial via Telegram.

## 1. Upgrade na Estratégia de Conversão (Adeus Preços Fixos)

Como o SGS atende desde pequenas clínicas até grandes hospitais e prefeituras, exibir preços fixos pode afastar grandes contas ou subestimar o valor do projeto.

*   **Substituição da Sessão de Investimento:** A sessão "Investimento" será transformada em **"Soluções Personalizadas"**.
*   **Novo Conteúdo da Sessão:**
    *   Foco em: "Escalabilidade", "Implantação Modular" e "Consultoria Especializada".
    *   **CTA Principal:** "Solicitar Orçamento Personalizado" ou "Falar com Consultor de Expansão".
    *   Argumento: "Cada instituição é única. Criamos o plano perfeito para o seu volume de atendimento."

## 2. Experiência do Usuário (UX) e Navegação

*   **Smooth Scroll Premium:** Implementação de comportamento de rolagem suave (Smooth Scroll) em todo o documento, garantindo que ao clicar nos links do menu (Solução, Benefícios, Orçamento), a transição seja fluida e elegante.
*   **Feedback Visual:** Adição de leves animações de entrada (reveal) nas sessões conforme o usuário rola a página, reforçando a sensação de uma plataforma moderna.

## 3. Inteligência Comercial via Telegram (Rastreamento)

Melhoraremos o `useTracker.ts` para que a equipe comercial saiba exatamente de onde e de quem vem o interesse.

*   **Identificador de Projeto:** Todas as mensagens no Telegram passarão a ter o cabeçalho: `🆔 PROJETO: SGS - SISTEMA DE GERENCIAMENTO DE SENHAS`.
*   **Captura de Dispositivo (Tech Info):**
    *   **OS Detecção:** Windows, macOS, Android, iOS ou Linux.
    *   **Tipo de Dispositivo:** Mobile vs. Desktop.
*   **Por que isso importa?** Saber se o lead está acessando de um iPhone em horário comercial ou de um PC em casa ajuda o vendedor a ajustar a abordagem inicial.

## 4. Próxima Etapa Técnica (Resumo)

1.  **Refatorar `App.tsx`**: Remover a tabela de preços e inserir o novo bloco de CTA de Orçamento. Adicionar `scroll-behavior: smooth`.
2.  **Atualizar `useTracker.ts`**: Implementar a lógica de parsing do `userAgent` e incluir as novas informações no payload enviado para o Telegram.
3.  **Ajuste no Header**: Mudar o link "Preços" para "Orçamento".
