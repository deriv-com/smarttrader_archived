import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from 'Components/ui/dropdown-menu';
import PlatformCard from './PlatformCard';
import { getAvailableApps } from './Data';

const PlatformSwitcher = () => {
    const { t } = useTranslation();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(prev => !prev);
    };

    return (
        <DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownToggle}>
            <DropdownMenuTrigger className='hover:cursor-pointer'>
                <div className='flex cursor-pointer flex-row items-center gap-2 px-base hover:bg-disabled-100'>
                    <img src='/images/pages/header/logo_smart_trader.svg' alt='Smarttrader logo' />
                    <div className='text-base font-bold'>{t('SmartTrader')}</div>
                    <img src='/images/pages/header/ic-chevron-down.svg' alt='Down arrow' />
                </div>
            </DropdownMenuTrigger>
            {isDropdownOpen && (
                <div className='fixed inset-0 top-32 hidden bg-black/[0.72] opacity-50 md:block lg:block' />
            )}
            <DropdownMenuContent
                data-testid='dt_dropdown_content'
                className='lg:h-68 relative grid w-screen grid-cols-1 bg-white hover:border-transparent md:grid-cols-2 lg:grid-cols-4'
            >
                {getAvailableApps().map(item => (
                    <PlatformCard key={item.title} {...item} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
export default PlatformSwitcher;
