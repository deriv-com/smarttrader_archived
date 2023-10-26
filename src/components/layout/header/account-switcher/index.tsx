import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '../../../ui/dropdown-menu/index';
import AccountSwitcherCard from './account-switcher-card';

export interface TAvailableApp {
    src: string;
    title: string;
    alt: string;
    path: string;
}

const AccountSwitcher = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const available_apps: TAvailableApp[] = [
        {
            src: '/images/common/ic-rebranding-deriv-trader.svg',
            title: 'A whole new trading experience on a powerful yet easy to use platform.',
            alt: 'dtrader icon',
            path: '/',
        },
        {
            src: '/images/common/ic-rebranding-deriv-bot.svg',
            title: 'Automated trading at your fingertips. No coding needed.',
            alt: 'dbot icon',
            path: '/',
        },
        {
            src: '/ic_smart_trader.svg',
            title: 'Trade the world’s markets with our popular user-friendly platform.',
            alt: 'dsmart trader icon',
            path: '/',
        },
        {
            src: '/images/common/ic-rebranding-binary-bot.svg',
            title: 'Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.',
            alt: 'binary bot icon',
            path: '/',
        },
    ];

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownToggle}>
            <DropdownMenuTrigger className='m-10 hover:cursor-pointer'>account switcher</DropdownMenuTrigger>
            {isDropdownOpen && (
                <div className='fixed inset-0 top-32 hidden bg-black/[0.72] opacity-50 md:block lg:block' />
            )}
            <DropdownMenuContent className='relative grid w-screen grid-cols-1 bg-white hover:border-transparent md:grid-cols-2 lg:h-72 lg:grid-cols-4'>
                {available_apps?.map(item => <AccountSwitcherCard key={item.title} {...item} />)}

                <a
                    className='absolute bottom-5 right-1/2 translate-x-1/2 transform text-[14px] font-medium text-red-500 hover:cursor-pointer'
                    href='/'
                >
                    {"Looking for CFDs? Go to Trader's Hub"}
                </a>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountSwitcher;
