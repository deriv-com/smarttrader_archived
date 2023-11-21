import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'Components/ui/dropdown-menu';
import { useState } from 'react';

type TimeDropDownProps = {
    selectedTimeFrame: string;
    setSelectedTimeFrame: React.Dispatch<React.SetStateAction<string>>;
};

const TimeDropDown = ({ selectedTimeFrame, setSelectedTimeFrame }: TimeDropDownProps) => {
    const { t } = useTranslation();
    const [isDropDownOpen, setDropDownOpen] = useState(false);

    const handleTimeToggle = () => setDropDownOpen(prev => !prev);

    const handleDurationSelect = (value: string) => setSelectedTimeFrame(value);

    const dropDownValues = [
        { key: 'minutes', value: t('minutes') },
        { key: 'hours', value: t('hours') },
        { key: 'days', value: t('days') },
    ];

    return (
        <DropdownMenu onOpenChange={handleTimeToggle}>
            <DropdownMenuTrigger className='drop-down-trigger w-40'>
                <div className='flex items-center justify-around'>
                    <div> {dropDownValues.find(item => item.key === selectedTimeFrame)?.value}</div>

                    <img
                        src='/images/pages/header/ic-chevron-down.svg'
                        alt='arrow'
                        className={`ml-2 transition-transform ${isDropDownOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='drop-down-content w-40'>
                {dropDownValues.map(item => (
                    <DropdownMenuItem
                        key={item.key}
                        className={item.key === selectedTimeFrame ? 'drowdown-item-selected' : 'drowdown-item'}
                        onClick={() => handleDurationSelect(item.key)}
                    >
                        <span>{item.value}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TimeDropDown;
