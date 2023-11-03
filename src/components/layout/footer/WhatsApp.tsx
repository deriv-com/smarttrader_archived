import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';
import { whatsAppURL } from 'Constants/urls';

const WhatsApp = () => {
    const { t } = useTranslation();

    return (
        <Tooltip className='h-full px-2 hover:bg-disabled-100' content={t('WhatsApp')}>
            <a href={whatsAppURL} target='_blank' rel='noreferrer'>
                <img src='/images/pages/footer/ic-whatsapp.svg' alt='WhatsApp icon' />
            </a>
        </Tooltip>
    );
};

export default WhatsApp;
