export type TPlatformCard = Record<'src' | 'title' | 'alt' | 'path', string>;

export const available_apps: TPlatformCard[] = [
    {
        src: '/images/common/ic-rebranding-deriv-trader.svg',
        title: 'A whole new trading experience on a powerful yet easy to use platform.',
        alt: 'dtrader icon',
        path: 'https://app.deriv.com/',
    },
    {
        src: '/images/common/ic-rebranding-deriv-bot.svg',
        title: 'Automated trading at your fingertips. No coding needed.',
        alt: 'dbot icon',
        path: 'https://app.deriv.com/bot',
    },
    {
        src: '/ic_smart_trader.svg',
        title: 'Trade the world’s markets with our popular user-friendly platform.',
        alt: 'dsmart trader icon',
        path: 'https://smarttrader.deriv.com/',
    },
    {
        src: '/images/common/ic-rebranding-binary-bot.svg',
        title: 'Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.',
        alt: 'binary bot icon',
        path: 'https://bot.deriv.com',
    },
];
