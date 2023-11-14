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

    const dropDownValues = [t('minutes'), t('hours'), t('days')];

    return (
        <DropdownMenu onOpenChange={handleTimeToggle}>
            <DropdownMenuTrigger className='drop-down-trigger w-40'>
                <div className='flex items-center justify-around'>
                    <div>{selectedTimeFrame}</div>
                    <img
                        src='/images/pages/header/ic-chevron-down.svg'
                        alt='arrow'
                        className={`ml-2 transition-transform ${isDropDownOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='drop-down-content w-40'>
                {dropDownValues.map(value => (
                    <DropdownMenuItem
                        key={value}
                        className={value === selectedTimeFrame ? 'drowdown-item-selected' : 'drowdown-item'}
                        onClick={() => handleDurationSelect(value)}
                    >
                        <span>{value}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TimeDropDown;
