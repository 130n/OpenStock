'use server';

import { connectToDatabase } from '@/database/mongoose';
import { StockQuoteCache } from '@/database/models/stockQuoteCache.model';

export async function getTopLosers(limit = 5, sortBy: 'changePercent' | 'change' = 'changePercent') {
    await connectToDatabase();

    const sortField = sortBy === 'changePercent' ? 'changePercent' : 'change';

    const losers = await StockQuoteCache.find({ change: { $lt: 0 } })
        .sort({ [sortField]: 1 })
        .limit(limit)
        .lean();

    return JSON.parse(JSON.stringify(losers));
}
