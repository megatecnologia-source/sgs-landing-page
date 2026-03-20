# Plano de Ação: Landing Page de Alta Conversão para o SGS

Este documento reflete a estratégia para o redesenho e otimização da Landing Page do **SGS (Sistema de Gerenciamento de Senhas)**. O foco é manter a inteligência tecnológica que já existe no projeto e aplicar uma camada de design extremamente moderno, executivo e de alta confiabilidade.

## 1. O que será MANTIDO (A Lógica)
*   **Envio de Formulário:** A integração atual com o FormSubmit (`gomesdocarmo@gmail.com`) permanece intacta.
*   **Notificação no Telegram:** O hook `useTracker.ts` e a função `sendProposal` continuarão sendo acionados corretamente no clique do WhatsApp e no envio do formulário.
*   **Logotipo e Identidade Base:** As imagens da Mega Tecnologia hospedadas no Cloudinary serão mantidas no cabeçalho e rodapé.
*   **Stack Tecnológico:** Continuaremos no React + Vite + Tailwind CSS (`App.tsx`).

## 2. O que será TRANSFORMADO (O Design e a Copy)

A narrativa e o visual migrarão de uma apresentação padrão para uma **proposta de alto valor (High-Ticket)**, gerando confiança instantânea para Órgãos de Governo, Clínicas e Hospitais.

*   **Estética Executiva:** Cores profundas (Azul Marinho, Chumbo, Branco Puro e toques de Dourado ou Verde Esmeralda para conversão), fontes sem serifa elegantes (Inter ou similares já no projeto), e muito uso de espaço em branco ("respiro").
*   **A Dor e a Solução:** A cópia abordará o caos das filas desorganizadas e apresentará o SGS como a solução definitiva para devolver a dignidade ao público e o controle absoluto à gestão.

## 3. Estrutura Visual Renovada (Sessões no App.tsx)

### Sessão 1: A Promessa (Dobra Principal/Hero)
*   **Headline:** Focada no impacto ("Transforme a Sala de Espera...").
*   **Visual:** Layout assimétrico moderno, com o botão do WhatsApp/Agendamento pulsando sutilmente.

### Sessão 2: O Caos vs. A Paz (Desafios)
*   Apresentação dos desafios atuais usando os ícones do `lucide-react` com um design de "cards glassy" (fundo levemente translúcido).

### Sessão 3: Para quem é o SGS?
*   Foco em Clínicas, Hospitais e Órgãos de Governo, criando identificação imediata com o visitante.

### Sessão 4: As Funcionalidades ("Como Funciona")
*   Exibição do fluxo (senha > painel > atendimento) com uma linha do tempo vertical ou um layout em grid sofisticado.

### Sessão 5: Prova Social (Mockups)
*   Inclusão de blocos de depoimentos fictícios de "Gestores" para ancorar a credibilidade da solução até a coleta de depoimentos reais.

### Sessão 6: A Oferta e Aceite da Proposta
*   A seção de escopo e investimento atual será redesenhada para parecer uma tabela de preços SaaS corporativa (premium).
*   O formulário de aceite atual, mantendo seus `inputs` e `onSubmit`, receberá um estilo minimalista, bordas arredondadas e sombras suaves, transmitindo segurança de dados.

## 4. Próximos Passos
Ao aprovar este plano, o código do `App.tsx` será refatorado seção por seção para plugar essa nova roupagem executiva por cima dos motores já funcionais da página.
