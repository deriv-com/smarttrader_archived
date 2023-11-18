import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'Components/ui/dropdown-menu';
import { useState } from 'react';
import DurationIndex from './Duration/DurationIndex';

const DurationTypeDropDown = () => {
    const { t } = useTranslation();
    const dropDownValues = [
        { key: 'duration', value: t('Duration') },
        { key: 'end_time', value: t('End time') },
    ];

    const [isDurationOpen, setDurationOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState(dropDownValues[0].key);

    const handleDurationToggle = () => setDurationOpen(prev => !prev);

    const handleDurationSelect = (value: string) => setSelectedDuration(value);

    return (
        <div className='flex items-center justify-start'>
            <DropdownMenu onOpenChange={handleDurationToggle}>
                <DropdownMenuTrigger className='drop-down-trigger w-40'>
                    <div className='flex items-center justify-around'>
                        <div>{dropDownValues.find(item => item.key === selectedDuration)?.value}</div>

                        <img
                            src='/images/pages/header/ic-chevron-down.svg'
                            alt='arrow'
                            className={`ml-2 transition-transform ${isDurationOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='drop-down-content w-40'>
                    {dropDownValues.map(item => (
                        <DropdownMenuItem
                            key={item.key}
                            className={item.key === selectedDuration ? 'drowdown-item-selected' : 'drowdown-item'}
                            onClick={() => handleDurationSelect(item.key)}
                        >
                            <span>{item.value}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {selectedDuration === 'duration' && <DurationIndex />}
        </div>
    );
};

export default DurationTypeDropDown;
