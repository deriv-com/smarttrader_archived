import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'Components/ui/dropdown-menu';
import { useState } from 'react';
import DurationIndex from './duration/DurationIndex';

const DurationAndTimeout = () => {
    const { t } = useTranslation();
    const [isDurationOpen, setDurationOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState(t('duration'));

    const handleDurationToggle = () => setDurationOpen(prev => !prev);

    const handleDurationSelect = (value: string) => setSelectedDuration(value);
    const dropDownValues = [t('duration'), t('end time')];

    return (
        <div className='flex items-center justify-start'>
            <DropdownMenu onOpenChange={handleDurationToggle}>
                <DropdownMenuTrigger className='drop-down-trigger w-40'>
                    <div className='flex items-center justify-around'>
                        <div>{selectedDuration}</div>

                        <img
                            src='/images/pages/header/ic-chevron-down.svg'
                            alt='arrow'
                            className={`ml-2 transition-transform ${isDurationOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='drop-down-content w-40'>
                    {dropDownValues.map(value => (
                        <DropdownMenuItem
                            key={value}
                            className={value === selectedDuration ? 'drowdown-item-selected' : 'drowdown-item'}
                            onClick={() => handleDurationSelect(value)}
                        >
                            <span>{value}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {selectedDuration === 'duration' && <DurationIndex />}
        </div>
    );
};

export default DurationAndTimeout;
