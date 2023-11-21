import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';
import useNetworkStatus from 'Hooks/useNetworkStatus';
import { useMemo } from 'react';

const statusConfigs = {
    online: { className: 'bg-success', tooltip: 'Online' },
    offline: { className: 'bg-danger', tooltip: 'Offline' },
    blinking: { className: 'animate-pulse bg-success', tooltip: 'Connecting to server' },
};

const NetworkStatus = () => {
    const status = useNetworkStatus();
    const { t } = useTranslation();
    const { className, tooltip } = useMemo(() => statusConfigs[status], [status]);

    return (
        <Tooltip className='px-3' content={t('Network status: {{tooltip}}', { tooltip })}>
            <div data-testid='dt_network_status_circle' className={`h-2 w-2 rounded-full ${className}`} />
        </Tooltip>
    );
};

export default NetworkStatus;
