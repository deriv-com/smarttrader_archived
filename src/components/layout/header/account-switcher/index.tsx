import React, { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '../../../ui/dropdown-menu/index';
import clsx from 'clsx';

const AccountSwitcher = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    type TAvailableApp = {
        src: string;
        title: string;
        alt: string;
    };
    const available_apps: TAvailableApp[] = [
        {
            src: '/images/common/ic-rebranding-deriv-trader.svg',
            title: 'A whole new trading experience on a powerful yet easy to use platform.',
            alt: 'dtrader icon',
        },
        {
            src: '/images/common/ic-rebranding-deriv-trader.svg',
            title: 'Automated trading at your fingertips. No coding needed.',
            alt: 'dbot icon',
        },
        {
            src: '/ic_smart_trader.svg',
            title: 'Trade the world’s markets with our popular user-friendly platform.',
            alt: 'dsmart trader icon',
        },
        {
            src: '/ic_smart_trader.svg',
            title: 'Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.',
            alt: 'binary bot icon',
        },
    ];
    const available_platforms = (item: TAvailableApp) => {
        const { src, title, alt } = item;
        return (
            <div
                className='flex flex-col gap-5 rounded-md px-5 py-5 hover:cursor-pointer  hover:bg-disabled-100'
                key={title}
            >
                <img className='w-36' src={src} alt={alt} />
                <span>{title}</span>
            </div>
        );
    };

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownToggle}>
            <DropdownMenuTrigger className='m-10 hover:cursor-pointer'>account switcher</DropdownMenuTrigger>
            {isDropdownOpen && (
                <div className='bg-blackOverlay fixed inset-0 top-32 hidden opacity-50 md:block lg:block' />
            )}
            <DropdownMenuContent className='relative  grid w-screen grid-cols-1 bg-white hover:border-transparent md:grid-cols-2 lg:grid-cols-4'>
                {available_apps?.map(item => (
                    <DropdownMenuItem className={clsx('m-5 hover:border-transparent')} key={item.title}>
                        {available_platforms(item)}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountSwitcher;
