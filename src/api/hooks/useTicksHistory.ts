import { useCallback } from 'react';
import useSubscription from './useSubscription';

import { TSocketRequestPayload } from 'Api/types';

type TTicksHistoryPayload = TSocketRequestPayload<'ticks_history'>['payload'];

const useTicksHistory = () => {
    const { subscribe: _subscribe, unsubscribe, data, ...rest } = useSubscription('ticks_history');

    const subscribe = useCallback(
        (
            symbol: TTicksHistoryPayload['ticks_history'],
            granularity: TTicksHistoryPayload['granularity'],
            count: TTicksHistoryPayload['count'] = 1000
        ) => {
            const style: TTicksHistoryPayload['style'] = granularity ? 'candles' : 'ticks';

            return _subscribe({
                payload: {
                    adjust_start_time: 1,
                    ticks_history: symbol,
                    end: 'latest',
                    count,
                    granularity: granularity || undefined,
                    style,
                },
            });
        },
        [_subscribe]
    );

    return {
        subscribe,
        unsubscribe,
        data,
        ...rest,
    };
};

export default useTicksHistory;
