'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Shield, Flame, Sparkles, X } from 'lucide-react';
import { getTipOfTheDay, type DailyTip } from '@/lib/actions/tipOfTheDay.actions';

export default function TipOfTheDay({ initialTip }: { initialTip: DailyTip | null }) {
    const [tip, setTip] = useState<DailyTip | null>(initialTip);
    const [dismissed, setDismissed] = useState(false);
    const [loading, setLoading] = useState(!initialTip);

    useEffect(() => {
        if (!initialTip) {
            setLoading(true);
            getTipOfTheDay().then(t => {
                setTip(t);
                setLoading(false);
            });
        }
    }, [initialTip]);

    if (dismissed) return null;

    if (loading) {
        return (
            <div className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5 backdrop-blur-sm p-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>Generating today&apos;s tips...</span>
                </div>
            </div>
        );
    }

    if (!tip) return null;

    return (
        <div className="w-full rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/5 via-transparent to-red-500/5 backdrop-blur-sm p-5 relative">
            <button
                onClick={() => setDismissed(true)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition-colors"
            >
                <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-purple-400">AI Tip of the Day</h3>
                <span className="text-xs text-gray-600 ml-auto mr-6">not financial advice</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Safe Bet */}
                <Link
                    href={`/stocks/${tip.safeBet.symbol}`}
                    className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors group"
                >
                    <div className="mt-0.5 p-1.5 rounded-lg bg-emerald-500/10">
                        <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Safe Bet</span>
                            <span className="text-sm font-semibold text-white group-hover:text-emerald-200">{tip.safeBet.symbol}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{tip.safeBet.reasoning}</p>
                    </div>
                </Link>

                {/* Le Grand Risque */}
                <Link
                    href={`/stocks/${tip.grandRisque.symbol}`}
                    className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors group"
                >
                    <div className="mt-0.5 p-1.5 rounded-lg bg-red-500/10">
                        <Flame className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-red-400 uppercase tracking-wide">Le Grand Risque</span>
                            <span className="text-sm font-semibold text-white group-hover:text-red-200">{tip.grandRisque.symbol}</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{tip.grandRisque.reasoning}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
