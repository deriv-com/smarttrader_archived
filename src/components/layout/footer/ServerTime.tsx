import Tooltip from 'Components/common/tooltip';
import useServerTime from 'Hooks/useServerTime';
import { epochToGMTFormat, epochToLocalFormat } from 'Constants/moment';

const ServerTime = () => {
    const time = useServerTime();
    const GMTFormat = epochToGMTFormat(time);
    const localFormat = epochToLocalFormat(time);

    return (
        <Tooltip className='border-x border-disabled-100 px-2 text-xs' content={localFormat}>
            <span>{GMTFormat}</span>
        </Tooltip>
    );
};

export default ServerTime;
