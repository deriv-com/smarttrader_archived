import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

// TODO complete the functionality + add tests
const NetworkStatus = () => {
    const { t } = useTranslation();

    return (
        <Tooltip content={t('Network status: Online')}>
            <div className='px-3'>
                <div className='h-2 w-2 rounded-full bg-success' />
            </div>
        </Tooltip>
    );
};

export default NetworkStatus;
