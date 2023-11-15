import { useCallback, useContext } from 'react';

import type {
    TSocketEndpointNames,
    TSocketError,
    TSocketPaginateableEndpointNames,
    TSocketRequestPayload,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from 'Api/types';

import APIContext from 'Utils/websocket/APIContext';

const useAPI = () => {
    const api = useContext(APIContext);

    const send = useCallback(
        async <T extends TSocketEndpointNames | TSocketPaginateableEndpointNames = TSocketEndpointNames>(
            name: T,
            payload?: TSocketRequestPayload<T>
        ): Promise<TSocketResponseData<T>> => {
            const response = await api?.send({ [name]: 1, ...(payload || {}) });

            if (response.error) {
                throw response.error;
            }

            return response;
        },
        [api]
    );

    const subscribe = useCallback(
        <T extends TSocketSubscribableEndpointNames>(
            name: T,
            payload?: TSocketRequestPayload<T>
        ): {
            subscribe: (
                onData: (response: Promise<TSocketResponseData<T>>) => void,
                onError: (response: Promise<TSocketError<T>>) => void
            ) => { unsubscribe?: VoidFunction };
        } => api?.subscribe({ [name]: 1, subscribe: 1, ...(payload || {}) }),
        [api]
    );

    return {
        send,
        subscribe,
    };
};

export default useAPI;
