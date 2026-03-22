import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
    console.log('--- Nova requisição recebida na function telegram ---');
    console.log('Método:', event.httpMethod);

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('ERRO: Variáveis TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID não encontradas.');
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Configuração ausente no Netlify.',
            }),
        };
    }

    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 'ok',
                message: 'A API está online e pronta para receber POST.',
                bot_configured: !!BOT_TOKEN,
                chat_configured: !!CHAT_ID,
            }),
        };
    }

    if (event.httpMethod !== 'POST') {
        return { 
            statusCode: 405, 
            body: JSON.stringify({ error: 'Método não permitido' }) 
        };
    }

    try {
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Corpo da requisição ausente' }),
            };
        }

        let payload: { text?: string; parse_mode?: string };
        try {
            payload = JSON.parse(event.body);
        } catch {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'JSON inválido' }),
            };
        }

        if (!payload.text || typeof payload.text !== 'string') {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Campo "text" é obrigatório' }),
            };
        }

        if (payload.text.length > 4096) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Texto excede o limite máximo de 4096 caracteres' }),
            };
        }

        console.log('Enviando para Telegram...');

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: payload.text.substring(0, 4096),
                parse_mode: payload.parse_mode === 'HTML' || payload.parse_mode === 'Markdown' 
                    ? payload.parse_mode 
                    : 'Markdown',
            }),
        });

        const data = await response.json();
        
        if (!data.ok) {
            console.error('Erro na API do Telegram:', data.description);
            return {
                statusCode: 502,
                body: JSON.stringify({ 
                    error: 'Erro ao enviar mensagem para o Telegram',
                    details: data.description,
                }),
            };
        }

        console.log('Resposta do Telegram: Sucesso');

        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ success: true, message_id: data.result?.message_id }),
        };
    } catch (error) {
        console.error('Erro interno na function:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro interno no servidor' }),
        };
    }
};

export { handler };
