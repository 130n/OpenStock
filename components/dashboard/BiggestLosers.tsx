'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { getTopLosers } from '@/lib/actions/stockQuoteCache.actions';
import { getStockVerdicts, type StockVerdict } from '@/lib/actions/stockAnalysis.actions';
import { formatCurrency, formatChangePercent, getChangeColorClass } from '@/lib/utils';

interface StockLoser {
    _id: string;
    symbol: string;
    name: string;
    logo?: string;
    price: number;
    change: number;
    changePercent: number;
}

type SortMode = 'percent' | 'absolute';

const verdictColors: Record<string, string> = {
    BUY: 'bg-green-500/20 text-green-400 border-green-500/30',
    SELL: 'bg-red-500/20 text-red-400 border-red-500/30',
    HOLD: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

function getSymbolKey(stocks: StockLoser[]): string {
    return stocks.map(s => s.symbol).sort().join(',');
}

export default function BiggestLosers({ initialData }: { initialData: StockLoser[] }) {
    const [sortBy, setSortBy] = useState<SortMode>('percent');
    const [data, setData] = useState<StockLoser[]>(initialData);
    const [verdicts, setVerdicts] = useState<Record<string, StockVerdict>>({});
    const [verdictsLoading, setVerdictsLoading] = useState(true);
    const lastSymbolKey = useRef<string>('');

    const fetchVerdicts = useCallback(async (stocks: StockLoser[], force = false) => {
        const key = getSymbolKey(stocks);
        if (!force && key === lastSymbolKey.current) return;
        lastSymbolKey.current = key;
        setVerdictsLoading(true);
        const v = await getStockVerdicts(stocks);
        const map: Record<string, StockVerdict> = {};
        for (const item of v) map[item.symbol] = item;
        setVerdicts(map);
        setVerdictsLoading(false);
    }, []);

    const fetchData = useCallback(async () => {
        const result = await getTopLosers(5, sortBy === 'percent' ? 'changePercent' : 'change');
        setData(result);
        await fetchVerdicts(result);
    }, [sortBy, fetchVerdicts]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, [fetchData]);

    // Fetch verdicts for initial data on mount
    useEffect(() => {
        if (initialData.length > 0) {
            fetchVerdicts(initialData, true);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!data || data.length === 0) {
        return (
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Biggest Losers</h3>
                <p className="text-gray-400 text-sm">Loading market data...</p>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Biggest Losers</h3>
                <div className="flex rounded-lg overflow-hidden border border-white/10">
                    <button
                        onClick={() => setSortBy('percent')}
                        className={`px-3 py-1 text-sm font-medium transition-colors ${
                            sortBy === 'percent'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-transparent text-gray-400 hover:text-gray-300'
                        }`}
                    >
                        %
                    </button>
                    <button
                        onClick={() => setSortBy('absolute')}
                        className={`px-3 py-1 text-sm font-medium transition-colors ${
                            sortBy === 'absolute'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-transparent text-gray-400 hover:text-gray-300'
                        }`}
                    >
                        $
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                {data.map((stock) => {
                    const v = verdicts[stock.symbol];
                    return (
                        <Link
                            key={stock.symbol}
                            href={`/stocks/${stock.symbol}`}
                            className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {stock.logo ? (
                                        <img
                                            src={stock.logo}
                                            alt={stock.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center text-white text-xs font-bold">
                                            {stock.symbol.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm font-medium text-white group-hover:text-gray-200">
                                            {stock.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{stock.symbol}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    {v ? (
                                        <span className={`px-2 py-0.5 text-xs font-bold rounded border ${verdictColors[v.verdict] || verdictColors.HOLD}`}>
                                            {v.verdict}
                                        </span>
                                    ) : (
                                        <span className="px-2 py-0.5 text-xs font-bold rounded border border-white/10 bg-white/5 text-transparent select-none">
                                            HOLD
                                        </span>
                                    )}
                                    <div className="text-right">
                                        <p className="text-sm text-white">{formatCurrency(stock.price)}</p>
                                        <div className={`flex items-center justify-end gap-1 text-xs ${getChangeColorClass(stock.changePercent)}`}>
                                            <ArrowDown className="w-3 h-3" />
                                            <span>
                                                {sortBy === 'percent'
                                                    ? formatChangePercent(stock.changePercent)
                                                    : formatCurrency(Math.abs(stock.change))}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Fixed-height reasoning area to prevent layout shift */}
                            <div className="mt-1.5 ml-11 min-h-[2.5rem]">
                                {v ? (
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {v.reasoning}
                                    </p>
                                ) : verdictsLoading ? (
                                    <div className="space-y-1.5">
                                        <div className="h-3 w-3/4 rounded bg-white/5 animate-pulse" />
                                        <div className="h-3 w-1/2 rounded bg-white/5 animate-pulse" />
                                    </div>
                                ) : null}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
