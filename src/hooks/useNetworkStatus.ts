import { useEffect, useState } from 'react';
import useNavigatorOnline from 'Hooks/useNavigatorOnline';
import useAPIContext from 'Api/hooks/useAPIContext';
import { getDerivAPIInstance } from 'Utils/websocket/APIProvider';

type TStatus = 'online' | 'offline' | 'blinking';

const useNetworkStatus = () => {
    const [status, setStatus] = useState<TStatus>('online');
    const networkStatus = useNavigatorOnline();
    const { socketConnection, setSocketConnection } = useAPIContext();
    const connection = socketConnection.connection;

    useEffect(() => {
        let reconnectTimeout: ReturnType<typeof setTimeout>;

        if (networkStatus) {
            /* The user is online */
            setStatus('blinking');

            const closeState = connection?.readyState == 2 || connection?.readyState == 3;
            const openState = connection?.readyState == 1;

            /* Will reconnect after the timout if the network status is online and the connection is closed or closing */
            reconnectTimeout = setTimeout(() => {
                if (networkStatus && closeState) {
                    const newSocketConnection = getDerivAPIInstance();
                    setSocketConnection(newSocketConnection);
                } else if (openState) {
                    connection?.send({ ping: 1 }); // get stable status sooner
                }
            }, 500);

            setStatus('online');
        } else {
            /* The user is offline */
            window.DerivAPI = {};
            connection?.close();
            setStatus('offline');
        }

        return () => clearTimeout(reconnectTimeout);
    }, [networkStatus, connection, setSocketConnection]);

    const statusConfigs = {
        online: { className: 'bg-success', tooltip: 'Online' },
        offline: { className: 'bg-danger', tooltip: 'Offline' },
        blinking: { className: 'animate-pulse bg-success', tooltip: 'Connecting to server' },
    }[status];

    return statusConfigs;
};

export default useNetworkStatus;
