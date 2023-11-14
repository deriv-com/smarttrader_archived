import TimeDropDown from './TimeDropDown';
import DurationInputField from './DurationInputField';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DurationIndex = () => {
    const { t } = useTranslation();

    const [selectedTimeFrame, setSelectedTimeFrame] = useState(t('minutes'));
    return (
        <>
            <DurationInputField selectedTimeFrame={selectedTimeFrame} />
            <TimeDropDown selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
        </>
    );
};

export default DurationIndex;
