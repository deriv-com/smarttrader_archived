import { useEffect, useState } from 'react';
import useQuery from 'Api/hooks/useQuery';

const useServerTime = () => {
    const currentDate = Date.now() / 1000;
    const [serverTime, setServerTime] = useState(currentDate);
    const { data } = useQuery('time', { options: { refetchInterval: 30000 } });

    useEffect(() => {
        let timeInterval: ReturnType<typeof setInterval>;

        if (data) {
            setServerTime(data.time ?? currentDate);

            timeInterval = setInterval(() => {
                setServerTime(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(timeInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return serverTime;
};

export default useServerTime;
