import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

// TODO complete the functionality + add tests
const ServerTime = () => {
    const { t } = useTranslation();

    return (
        <Tooltip className='border-x border-disabled-100 px-2 text-xs' content={t('2023-11-03 03:31:07 GMT')}>
            <span>2023-11-03 03:31:07 GMT</span>
        </Tooltip>
    );
};

export default ServerTime;
