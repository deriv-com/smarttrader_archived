import Tooltip from 'Components/common/tooltip';
import useServerTime from 'Hooks/useServerTime';
import { epochToLocal, epochToUTC } from 'Utils/moment';

const ServerTime = () => {
    const time = useServerTime();
    const UTCFormat = epochToUTC(time, 'YYYY-MM-DD HH:mm:ss [GMT]');
    const localFormat = epochToLocal(time, 'YYYY-MM-DD HH:mm:ss Z');

    return (
        <Tooltip className='border-x border-disabled-100 px-2 text-xs' content={localFormat}>
            <span>{UTCFormat}</span>
        </Tooltip>
    );
};

export default ServerTime;
