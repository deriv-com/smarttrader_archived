import { useTranslation } from 'react-i18next';
import StaticUrl from 'Components/common/StaticUrl';
import Tooltip from 'Components/common/tooltip';
import { helpCenterURL } from 'Constants/urls';

const HelpCenter = () => {
    const { t } = useTranslation();

    return (
        <Tooltip content={t('Help center')}>
            <StaticUrl href={helpCenterURL} className='flex h-9 items-center px-3 hover:bg-disabled-100'>
                <img src='/images/pages/footer/ic-help-centre.svg' alt='Help center icon' />
            </StaticUrl>
        </Tooltip>
    );
};

export default HelpCenter;
