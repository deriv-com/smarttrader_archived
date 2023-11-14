import { useTranslation } from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from 'Components/ui/dropdown-menu';
import { useState } from 'react';

const StartTime = () => {
    const { t } = useTranslation();
    const [isDropDownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(prev => !prev);
    };

    return (
        <div className='flex items-center justify-start'>
            <span className='text-m mr-3 font-light'> {t('Start time')}</span>
            <DropdownMenu onOpenChange={handleDropdownToggle}>
                <DropdownMenuTrigger className='drop-down-trigger w-40'>
                    <div className='flex items-center justify-around'>
                        <div>Now</div>
                        <img
                            src='/images/pages/header/ic-chevron-down.svg'
                            alt='arrow'
                            className={`ml-2 transition-transform ${isDropDownOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='drop-down-content w-40'>
                    <DropdownMenuItem className='drowdown-item-selected'>
                        <span>Now</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='drowdown-item'>
                        <span>Item 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='drowdown-item'>
                        <span>Item 3</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default StartTime;
