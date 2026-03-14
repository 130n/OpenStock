export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
    { href: '/api-docs', label: 'API Docs' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
        {
            title: 'Financial',
            symbols: [
                { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
                { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },
                { s: 'NYSE:BAC', d: 'Bank Amer Corp' },
                { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },
                { s: 'NYSE:C', d: 'Citigroup Inc' },
                { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
            ],
        },
        {
            title: 'Technology',
            symbols: [
                { s: 'NASDAQ:AAPL', d: 'Apple' },
                { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
                { s: 'NASDAQ:MSFT', d: 'Microsoft' },
                { s: 'NASDAQ:META', d: 'Meta Platforms' },
                { s: 'NYSE:ORCL', d: 'Oracle Corp' },
                { s: 'NASDAQ:INTC', d: 'Intel Corp' },
            ],
        },
        {
            title: 'Services',
            symbols: [
                { s: 'NASDAQ:AMZN', d: 'Amazon' },
                { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
                { s: 'NYSE:T', d: 'At&t Inc' },
                { s: 'NYSE:WMT', d: 'Walmart' },
                { s: 'NYSE:V', d: 'Visa' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SPX500',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                { name: 'NYSE:JPM', displayName: 'JPMorgan Chase' },
                { name: 'NYSE:WFC', displayName: 'Wells Fargo Co New' },
                { name: 'NYSE:BAC', displayName: 'Bank Amer Corp' },
                { name: 'NYSE:HSBC', displayName: 'Hsbc Hldgs Plc' },
                { name: 'NYSE:C', displayName: 'Citigroup Inc' },
                { name: 'NYSE:MA', displayName: 'Mastercard Incorporated' },
            ],
        },
        {
            name: 'Technology',
            symbols: [
                { name: 'NASDAQ:AAPL', displayName: 'Apple' },
                { name: 'NASDAQ:GOOGL', displayName: 'Alphabet' },
                { name: 'NASDAQ:MSFT', displayName: 'Microsoft' },
                { name: 'NASDAQ:FB', displayName: 'Meta Platforms' },
                { name: 'NYSE:ORCL', displayName: 'Oracle Corp' },
                { name: 'NASDAQ:INTC', displayName: 'Intel Corp' },
            ],
        },
        {
            name: 'Services',
            symbols: [
                { name: 'NASDAQ:AMZN', displayName: 'Amazon' },
                { name: 'NYSE:BABA', displayName: 'Alibaba Group Hldg Ltd' },
                { name: 'NYSE:T', displayName: 'At&t Inc' },
                { name: 'NYSE:WMT', displayName: 'Walmart' },
                { name: 'NYSE:V', displayName: 'Visa' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',

    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',

    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',

    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',

    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE',
];

// ~1000 major US stocks (S&P 500 + large/mid-caps) for quote cache
export const TRACKED_STOCK_SYMBOLS = [
    // S&P 500 - Technology
    'AAPL', 'MSFT', 'GOOGL', 'GOOG', 'AMZN', 'NVDA', 'META', 'TSLA', 'AVGO', 'ORCL',
    'CRM', 'ADBE', 'AMD', 'INTC', 'CSCO', 'QCOM', 'TXN', 'INTU', 'AMAT', 'NOW',
    'IBM', 'MU', 'ADI', 'LRCX', 'KLAC', 'SNPS', 'CDNS', 'MCHP', 'NXPI', 'APH',
    'MSI', 'FTNT', 'PANW', 'CRWD', 'ZS', 'DDOG', 'NET', 'SNOW', 'PLTR', 'TEAM',
    'WDAY', 'ANSS', 'KEYS', 'MPWR', 'ON', 'SWKS', 'TER', 'FSLR', 'ENPH', 'SEDG',
    'EPAM', 'PTC', 'CTSH', 'IT', 'AKAM', 'JNPR', 'FFIV', 'GEN', 'NTAP', 'WDC',
    'STX', 'HPQ', 'HPE', 'DELL', 'ZBRA', 'TRMB', 'TYL', 'PAYC', 'PCTY', 'MANH',

    // S&P 500 - Financials
    'JPM', 'V', 'MA', 'BAC', 'WFC', 'GS', 'MS', 'BLK', 'SCHW', 'C',
    'AXP', 'SPGI', 'ICE', 'CME', 'MCO', 'AON', 'MMC', 'CB', 'PGR', 'TRV',
    'AIG', 'MET', 'PRU', 'AFL', 'ALL', 'HIG', 'GL', 'L', 'BRO', 'WRB',
    'CINF', 'RJF', 'NTRS', 'STT', 'BK', 'CFG', 'RF', 'HBAN', 'KEY', 'FITB',
    'MTB', 'ZION', 'CMA', 'FRC', 'SBNY', 'SIVB', 'USB', 'PNC', 'TFC', 'COF',
    'DFS', 'SYF', 'ALLY', 'NDAQ', 'CBOE', 'MSCI', 'FDS', 'MKTX', 'VRSN', 'FIS',
    'FISV', 'GPN', 'FLT', 'WEX', 'SQ', 'PYPL', 'COIN', 'HOOD', 'SOFI', 'AFRM',

    // S&P 500 - Healthcare
    'UNH', 'JNJ', 'LLY', 'ABBV', 'MRK', 'PFE', 'TMO', 'ABT', 'DHR', 'BMY',
    'AMGN', 'GILD', 'ISRG', 'MDT', 'ELV', 'CI', 'HCA', 'SYK', 'BSX', 'VRTX',
    'REGN', 'ZTS', 'BDX', 'EW', 'IDXX', 'IQV', 'MTD', 'A', 'WST', 'ALGN',
    'DXCM', 'PODD', 'HOLX', 'TECH', 'BAX', 'RMD', 'COO', 'HSIC', 'XRAY', 'DGX',
    'LH', 'PKI', 'CRL', 'MRNA', 'BIIB', 'ILMN', 'CTLT', 'INCY', 'SGEN', 'HZNP',
    'VTRS', 'OGN', 'TEVA', 'ZBH', 'TFX', 'ALLE', 'STE', 'HUM', 'CNC', 'MOH',

    // S&P 500 - Consumer Discretionary
    'HD', 'MCD', 'NKE', 'LOW', 'SBUX', 'TJX', 'BKNG', 'CMG', 'ORLY', 'AZO',
    'ROST', 'DHI', 'LEN', 'PHM', 'NVR', 'TOL', 'GPC', 'BBY', 'ULTA', 'DG',
    'DLTR', 'KMX', 'TSCO', 'WSM', 'RH', 'ETSY', 'W', 'EBAY', 'ABNB', 'EXPE',
    'MAR', 'HLT', 'WH', 'H', 'WYNN', 'LVS', 'MGM', 'CZR', 'NCLH', 'RCL',
    'CCL', 'DRI', 'YUM', 'DARDEN', 'POOL', 'LKQ', 'BWA', 'APTV', 'LEA', 'RL',
    'TPR', 'CPRI', 'HAS', 'MAT', 'GRMN', 'DECK', 'LULU', 'CROX', 'BIRK', 'ON',
    'F', 'GM', 'RIVN', 'LCID', 'NIO', 'XPEV', 'LI', 'UBER', 'LYFT', 'DASH',

    // S&P 500 - Consumer Staples
    'PG', 'KO', 'PEP', 'COST', 'WMT', 'PM', 'MO', 'MDLZ', 'CL', 'EL',
    'KMB', 'GIS', 'HSY', 'K', 'SJM', 'CPB', 'HRL', 'MKC', 'CAG', 'BG',
    'ADM', 'TSN', 'KHC', 'STZ', 'BF.B', 'TAP', 'SAM', 'MNST', 'KDP', 'CLX',
    'CHD', 'SPC', 'COTY', 'WBA', 'KR', 'SYY', 'USFD', 'PFGC', 'CHEF',

    // S&P 500 - Industrials
    'CAT', 'UNP', 'HON', 'UPS', 'RTX', 'BA', 'DE', 'LMT', 'GE', 'MMM',
    'GD', 'NOC', 'TDG', 'ITW', 'EMR', 'ETN', 'PH', 'ROK', 'AME', 'DOV',
    'CMI', 'PCAR', 'OTIS', 'CARR', 'SWK', 'FTV', 'GWW', 'FAST', 'WAB', 'CSX',
    'NSC', 'FDX', 'CHRW', 'JBHT', 'XPO', 'DAL', 'LUV', 'UAL', 'AAL', 'ALK',
    'JBLU', 'WM', 'RSG', 'VRSK', 'CPRT', 'CTAS', 'PAYX', 'ADP', 'BR', 'LDOS',
    'BAH', 'SAIC', 'J', 'PWR', 'ACM', 'MTZ', 'EME', 'FIX', 'HWM', 'TT',
    'IR', 'RRX', 'IEX', 'GNRC', 'PLUG', 'BLDR', 'POOL', 'SITE',

    // S&P 500 - Energy
    'XOM', 'CVX', 'COP', 'SLB', 'EOG', 'MPC', 'PSX', 'VLO', 'PXD', 'OXY',
    'HES', 'DVN', 'FANG', 'HAL', 'BKR', 'OKE', 'WMB', 'KMI', 'ET', 'TRGP',
    'CTRA', 'MRO', 'APA', 'EQT', 'AR', 'RRC', 'SWN', 'CHK', 'MTDR', 'PR',
    'DINO', 'DK', 'PBF', 'CVI', 'HFC', 'PARR',

    // S&P 500 - Utilities
    'NEE', 'DUK', 'SO', 'D', 'AEP', 'SRE', 'EXC', 'XEL', 'ED', 'WEC',
    'ES', 'AWK', 'AEE', 'CMS', 'DTE', 'FE', 'PPL', 'CNP', 'NI', 'EVRG',
    'ATO', 'NRG', 'VST', 'CEG', 'PNW', 'OGE', 'LNT', 'AES', 'BKH', 'AVA',

    // S&P 500 - Real Estate
    'PLD', 'AMT', 'CCI', 'EQIX', 'PSA', 'DLR', 'O', 'WELL', 'SPG', 'VICI',
    'AVB', 'EQR', 'ESS', 'MAA', 'UDR', 'CPT', 'INVH', 'SUI', 'ELS', 'PEAK',
    'VTR', 'OHI', 'MPW', 'ARE', 'BXP', 'KIM', 'REG', 'FRT', 'HST', 'RHP',

    // S&P 500 - Materials
    'LIN', 'APD', 'SHW', 'ECL', 'FCX', 'NEM', 'NUE', 'STLD', 'VMC', 'MLM',
    'DOW', 'DD', 'EMN', 'CE', 'PPG', 'ALB', 'FMC', 'MOS', 'CF', 'IFF',
    'CTVA', 'BALL', 'PKG', 'IP', 'WRK', 'SEE', 'AVY', 'AMCR', 'CCK',

    // S&P 500 - Communication Services
    'NFLX', 'DIS', 'CMCSA', 'T', 'VZ', 'TMUS', 'CHTR', 'EA', 'TTWO', 'ATVI',
    'MTCH', 'ZG', 'PINS', 'SNAP', 'RBLX', 'U', 'WBD', 'PARA', 'FOX', 'FOXA',
    'LYV', 'IACI', 'IPG', 'OMC', 'ROKU', 'TTD', 'MGNI', 'PUBM', 'DV',

    // Mid-cap Technology
    'BILL', 'MDB', 'CFLT', 'ESTC', 'DOCN', 'GTLB', 'HCP', 'BRZE', 'CWAN', 'SPT',
    'ASAN', 'FROG', 'DT', 'NEWR', 'SUMO', 'VRNS', 'TENB', 'QLYS', 'RPD', 'S',
    'CYBR', 'SAIL', 'EVBG', 'ALRM', 'JAMF', 'SMAR', 'APPN', 'COUP', 'VEEV', 'DOCU',

    // Mid-cap Healthcare & Biotech
    'EXAS', 'NVCR', 'NTRA', 'GH', 'TWST', 'BEAM', 'EDIT', 'NTLA', 'CRSP', 'FATE',
    'RCKT', 'RARE', 'BMRN', 'ALNY', 'IONS', 'SRPT', 'NBIX', 'PCVX', 'ARVN', 'KRTX',
    'ACAD', 'SAGE', 'AXSM', 'CRNX', 'IMVT', 'RLAY', 'TGTX', 'GTHX', 'CORT', 'PTCT',

    // Mid-cap Financials
    'LPLA', 'IBKR', 'EWBC', 'WAL', 'FNB', 'PNFP', 'GBCI', 'UMBF', 'BOKF', 'OZK',
    'SNV', 'CADE', 'HWC', 'WTFC', 'FHN', 'SSB', 'COLB', 'FFIN', 'IBTX', 'ABCB',

    // Mid-cap Industrials
    'AXON', 'TTC', 'MIDD', 'AGCO', 'CNHI', 'LFUS', 'RBC', 'AOS', 'SCI', 'TREX',
    'AZEK', 'AAON', 'WTS', 'EAF', 'KNX', 'SAIA', 'ODFL', 'LSTR', 'HUBG', 'ARCB',

    // Mid-cap Consumer
    'FIVE', 'BOOT', 'OLLI', 'BJ', 'CASY', 'WING', 'SHAK', 'JACK', 'TXRH', 'EAT',
    'CAKE', 'DIN', 'PLAY', 'SIX', 'FUN', 'SEAS', 'MTN', 'SKX', 'FOXF', 'BC',

    // Mid-cap Energy
    'CHRD', 'SM', 'ESTE', 'VTLE', 'NOG', 'CIVI', 'GPOR', 'LNG', 'DTM', 'AM',
    'HESM', 'WES', 'ENLC', 'SMLP', 'PAA', 'EPD', 'MMP', 'MPLX', 'PSXP', 'CEQP',

    // Additional large/mid-cap
    'BRK.B', 'SHOP', 'SPOT', 'ZM', 'TWLO', 'OKTA', 'BABA', 'JD', 'PDD', 'SE',
    'GRAB', 'TME', 'BILI', 'MELI', 'GLOB', 'STNE', 'PAGS', 'NU', 'XP', 'VIST',
    'ARCO', 'CAAP', 'PAM', 'LOMA', 'SUPV', 'BMA', 'GGAL', 'CRESY', 'TEO', 'IRS',
    'AGRO', 'IRCP', 'EDN', 'TGS', 'YPF', 'CEPU', 'BIOX', 'DESP', 'VTEX', 'CINT',

    // Tech growth / recent IPOs
    'ARM', 'CART', 'KVUE', 'KENVUE', 'CAVA', 'TOST', 'DUOL', 'CLBT', 'IONQ', 'RGTI',
    'QUBT', 'SMCI', 'APP', 'CELH', 'HIMS', 'BROS', 'DLO', 'PAYO', 'FLYW', 'TASK',
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];