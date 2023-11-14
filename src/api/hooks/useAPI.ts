import { useCallback } from 'react';

import type {
    TSocketEndpointNames,
    TSocketPaginateableEndpointNames,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from 'Api/types';

import useAPIContext from './useAPIContext';

const useAPI = () => {
    const { socketConnection } = useAPIContext();

    const send = useCallback(
        async <T extends TSocketEndpointNames | TSocketPaginateableEndpointNames = TSocketEndpointNames>(
            name: T,
            payload?: TSocketRequestPayload<T>
        ): Promise<TSocketResponseData<T>> => {
            const response = await socketConnection?.send({ [name]: 1, ...(payload || {}) });

            if (response.error) {
                throw response.error;
            }

            return response;
        },
        [socketConnection]
    );

    const subscribe = useCallback(
        <T extends TSocketSubscribableEndpointNames>(
            name: T,
            payload?: TSocketRequestPayload<T>
        ): {
            subscribe: (
                onData: (response: Promise<TSocketResponseData<T>>) => void,
                onError: (response: Promise<TSocketResponseData<T>>) => void
            ) => { unsubscribe?: VoidFunction };
        } => socketConnection?.subscribe({ [name]: 1, subscribe: 1, ...(payload || {}) }),
        [socketConnection]
    );

    return {
        send,
        subscribe,
    };
};

export default useAPI;
