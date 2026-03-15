'use server';

export interface DailyTip {
    safeBet: { symbol: string; reasoning: string };
    grandRisque: { symbol: string; reasoning: string };
    generatedAt: string;
}

export async function getTipOfTheDay(): Promise<DailyTip | null> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) return null;

    try {
        const { connectToDatabase } = await import('@/database/mongoose');
        const { StockQuoteCache } = await import('@/database/models/stockQuoteCache.model');
        await connectToDatabase();

        // Get today's movers for context
        const losers = await StockQuoteCache.find({ change: { $lt: 0 } })
            .sort({ changePercent: 1 }).limit(10).lean();
        const gainers = await StockQuoteCache.find({ change: { $gt: 0 } })
            .sort({ changePercent: -1 }).limit(10).lean();

        const context = [
            'TOP GAINERS:',
            ...gainers.map(s => `${s.symbol} (${s.name}): $${s.price}, +${s.changePercent?.toFixed(2)}%`),
            '',
            'TOP LOSERS:',
            ...losers.map(s => `${s.symbol} (${s.name}): $${s.price}, ${s.changePercent?.toFixed(2)}%`),
        ].join('\n');

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
                        content: `You are a sharp, witty stock market analyst with WSB energy. Given today's market movers, pick TWO stocks:

1. "Safe Bet" - a solid, lower-risk pick that's likely to recover or continue growing. Think value investing meets common sense.
2. "Le Grand Risque" - a high-risk, high-reward YOLO play. The kind of thing that either prints tendies or becomes loss porn. Be dramatic and fun about it.

Keep reasoning to 1-2 punchy sentences each. Be entertaining but ground it in the actual data.

Respond ONLY with valid JSON, no markdown fences:
{"safeBet":{"symbol":"AAPL","reasoning":"your take"},"grandRisque":{"symbol":"GME","reasoning":"your take"}}`
                    },
                    {
                        role: 'user',
                        content: `Today's market data:\n\n${context}`
                    }
                ],
                max_tokens: 300,
            }),
        });

        if (!res.ok) return null;

        const data = await res.json();
        const content = data.choices[0]?.message?.content || '';
        const cleaned = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsed = JSON.parse(cleaned);

        return {
            ...parsed,
            generatedAt: new Date().toISOString(),
        };
    } catch {
        return null;
    }
}
