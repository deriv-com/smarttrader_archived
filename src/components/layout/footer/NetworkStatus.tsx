import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';
import useNavigatorOnline from 'Hooks/useNavigatorOnline';
import useAPIContext from 'Api/hooks/useAPIContext';
import { getDerivAPIInstance } from 'Utils/websocket/APIProvider';

type TStatus = 'online' | 'offline' | 'blinking';

const NetworkStatus = () => {
    const [status, setStatus] = useState<TStatus>('online');
    const { t } = useTranslation();
    const networkStatus = useNavigatorOnline();
    const { socketConnection, setSocketConnection } = useAPIContext();
    const connection = socketConnection.connection;

    useEffect(() => {
        if (networkStatus) {
            /* The user is online */
            setStatus('blinking');
            /* Will reconnect after the timout if the network status is online and the connection is closed or closing */
            let reconnectTimeout;
            clearTimeout(reconnectTimeout);

            const closeState = connection.readyState == 2 || connection.readyState == 3;
            const openState = connection.readyState == 1;

            reconnectTimeout = setTimeout(() => {
                reconnectTimeout = null;
                if (networkStatus && closeState) {
                    const newSocketConnection = getDerivAPIInstance();
                    setSocketConnection(newSocketConnection);
                } else if (openState) {
                    connection.send({ ping: 1 }); // get stable status sooner
                }
            }, 500);

            setStatus('online');
        } else {
            /* The user is offline */
            window.DerivAPI = {};
            connection.close();
            setStatus('offline');
        }
    }, [networkStatus, connection, setSocketConnection]);

    const statusConfigs = {
        online: { className: 'bg-success', tooltip: 'Online' },
        offline: { className: 'bg-danger', tooltip: 'Offline' },
        blinking: { className: 'animate-pulse bg-success', tooltip: 'Connecting to server' },
    }[status];

    const { className, tooltip } = statusConfigs;

    return (
        <Tooltip className='px-3' content={t('Network status: {{tooltip}}', { tooltip })}>
            <div className={`h-2 w-2 rounded-full ${className}`} />
        </Tooltip>
    );
};

export default NetworkStatus;
