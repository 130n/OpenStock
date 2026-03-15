'use server';

interface LoserStock {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
}

export interface StockVerdict {
    symbol: string;
    verdict: 'BUY' | 'SELL' | 'HOLD';
    reasoning: string;
}

export async function getStockVerdicts(stocks: LoserStock[]): Promise<StockVerdict[]> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) return [];

    const stockList = stocks
        .map(s => `${s.symbol} (${s.name}): $${s.price}, down ${s.changePercent.toFixed(2)}% ($${s.change.toFixed(2)})`)
        .join('\n');

    try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'google/gemini-2.0-flash-001',
                messages: [
                    {
                        role: 'system',
                        content: `You are a degenerate stock analyst from r/wallstreetbets. For each stock, give a verdict (BUY, SELL, or HOLD) and a 1-2 sentence reasoning with WSB energy - rocket emojis, diamond hands, loss porn appreciation, etc. Keep it fun but base it on real logic.

Respond ONLY with valid JSON array, no markdown fences. Format:
[{"symbol":"AAPL","verdict":"BUY","reasoning":"your take here"}]`
                    },
                    {
                        role: 'user',
                        content: `Today's biggest losers. Give me your verdict on each:\n\n${stockList}`
                    }
                ],
                max_tokens: 600,
            }),
        });

        if (!res.ok) return [];

        const data = await res.json();
        const content = data.choices[0]?.message?.content || '[]';
        const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        return JSON.parse(cleaned) as StockVerdict[];
    } catch {
        return [];
    }
}
