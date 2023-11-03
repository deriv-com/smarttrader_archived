import { useTranslation } from 'react-i18next';
import StaticUrl from 'Components/common/StaticUrl';
import Tooltip from 'Components/common/tooltip';
import { helpCenterURL } from 'Constants/urls';

const HelpCenter = () => {
    const { t } = useTranslation();

    return (
        <Tooltip className='h-full px-3 hover:bg-disabled-100' content={t('Help center')}>
            <StaticUrl href={helpCenterURL}>
                <img src='/images/pages/footer/ic-help-centre.svg' alt='Help center icon' />
            </StaticUrl>
        </Tooltip>
    );
};

export default HelpCenter;
