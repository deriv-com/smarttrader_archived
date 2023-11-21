import TimeDropDown from './TimeDropDown';
import DurationInputField from './DurationInputField';
import { useState } from 'react';

const DurationIndex = () => {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('minutes');
    return (
        <>
            <DurationInputField selectedTimeFrame={selectedTimeFrame} />
            <TimeDropDown selectedTimeFrame={selectedTimeFrame} setSelectedTimeFrame={setSelectedTimeFrame} />
        </>
    );
};

export default DurationIndex;
