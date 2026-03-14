import { Schema, model, models, type Document, type Model } from 'mongoose';

export interface IStockQuoteCache extends Document {
    symbol: string;
    name: string;
    logo?: string;
    price: number;
    change: number;
    changePercent: number;
    lastUpdated: Date;
}

const StockQuoteCacheSchema = new Schema<IStockQuoteCache>(
    {
        symbol: { type: String, required: true, unique: true, uppercase: true, trim: true },
        name: { type: String, required: true },
        logo: { type: String },
        price: { type: Number, required: true },
        change: { type: Number, required: true },
        changePercent: { type: Number, required: true },
        lastUpdated: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export const StockQuoteCache: Model<IStockQuoteCache> =
    (models?.StockQuoteCache as Model<IStockQuoteCache>) ||
    model<IStockQuoteCache>('StockQuoteCache', StockQuoteCacheSchema);
