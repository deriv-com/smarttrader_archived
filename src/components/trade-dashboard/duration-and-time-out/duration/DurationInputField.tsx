import { useTranslation } from 'react-i18next';
import { ChangeEvent, useEffect, useState } from 'react';
import Input from 'Components/ui/input';

type DurationInputFieldProps = {
    selectedTimeFrame: string;
};

const DurationInputField = ({ selectedTimeFrame }: DurationInputFieldProps) => {
    const { t } = useTranslation();

    type TTimeFrameConfig = Record<string, number>;

    type ThintValuesAndMessages = Record<string, TTimeFrameConfig>;

    const hintValuesAndMessages: ThintValuesAndMessages = {
        minutes: {
            min: 15,
            max: 1440,
        },
        hours: {
            min: 1,
            max: 24,
        },
        days: {
            min: 1,
            max: 365,
        },
    };

    const [inputValue, setInputValue] = useState({
        value: '',
        hasError: false,
        hintMessage: t('Minimum 15'),
    });

    useEffect(() => {
        const timeFrameConfig: TTimeFrameConfig = hintValuesAndMessages?.[selectedTimeFrame] || { min: 0, max: 0 };
        setInputValue({ value: '', hasError: false, hintMessage: t(`Minimum ${timeFrameConfig.min}`) });
    }, [selectedTimeFrame]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const isValidInput = /^$|^[0-9]{1,4}$/.test(inputValue);

        if (isValidInput) {
            const timeFrameConfig: TTimeFrameConfig = hintValuesAndMessages?.[selectedTimeFrame] || { min: 0, max: 0 };
            const value = parseInt(inputValue);
            let hasError = false;
            let hintMessage = t(`Minimum ${timeFrameConfig.min}`);

            if (value < timeFrameConfig.min) {
                hasError = true;
                hintMessage = t(`Minimum ${timeFrameConfig.min}`);
            } else if (value > timeFrameConfig.max) {
                hasError = true;
                hintMessage = t(`Maximum ${timeFrameConfig.max}`);
            }

            setInputValue({ value: inputValue, hasError, hintMessage });
        }
    };
    return (
        <div className='w-40'>
            <Input
                type='text'
                id='exampleInput'
                value={inputValue.value}
                onChange={handleChange}
                labelAlignment='left'
                hint={inputValue.hintMessage}
                error={inputValue.hasError}
            />
        </div>
    );
};

export default DurationInputField;
