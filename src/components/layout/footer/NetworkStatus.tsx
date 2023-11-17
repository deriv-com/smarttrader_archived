import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';
import useNetworkStatus from 'Hooks/useNetworkStatus';

const NetworkStatus = () => {
    const { className, tooltip } = useNetworkStatus();
    const { t } = useTranslation();

    return (
        <Tooltip className='px-3' content={t('Network status: {{tooltip}}', { tooltip })}>
            <div data-testid='dt_network_status_circle' className={`h-2 w-2 rounded-full ${className}`} />
        </Tooltip>
    );
};

export default NetworkStatus;
