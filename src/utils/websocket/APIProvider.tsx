import { PropsWithChildren, useState } from 'react';
// @ts-expect-error `@deriv/deriv-api` is not in TypeScript, Hence we ignore the TS error.
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';
import { getAppId, getSocketURL } from './config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import APIContext from './APIContext';
import { DEFAULT_LANGUAGE } from 'Constants/translations';

declare global {
    interface Window {
        ReactQueryClient?: QueryClient;
        DerivAPI?: Record<string, DerivAPIBasic>;
    }
}

// This is a temporary workaround to share a single `QueryClient` instance between all the packages.
// Later once we have each package separated we won't need this anymore and can remove this.
const getSharedQueryClientContext = (): QueryClient => {
    if (!window.ReactQueryClient) {
        window.ReactQueryClient = new QueryClient();
    }

    return window.ReactQueryClient;
};

// This is a temporary workaround to share a single `DerivAPIBasic` instance for every unique URL.
// Later once we have each package separated we won't need this anymore and can remove this.
export const getDerivAPIInstance = (): DerivAPIBasic => {
    const endpoint = getSocketURL();
    const language = DEFAULT_LANGUAGE; // Need to use the language from the app context.
    const brand = 'deriv';
    const wss = `wss://${endpoint}/websockets/v3?app_id=${getAppId()}&l=${language}&brand=${brand}`;

    if (!window.DerivAPI) {
        window.DerivAPI = {};
    }

    if (!window.DerivAPI?.[wss]) {
        window.DerivAPI[wss] = new DerivAPIBasic({ connection: new WebSocket(wss) });
    }

    return window.DerivAPI?.[wss];
};

const queryClient = getSharedQueryClientContext();

const APIProvider = ({ children }: PropsWithChildren) => {
    // Use the new API instance if the `standalone` prop is set to true,
    // else use the legacy socket connection.
    const activeConnection = getDerivAPIInstance();
    const [socketConnection, setSocketConnection] = useState(activeConnection);

    return (
        <APIContext.Provider value={{ socketConnection, setSocketConnection }}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools />
            </QueryClientProvider>
        </APIContext.Provider>
    );
};

export default APIProvider;
