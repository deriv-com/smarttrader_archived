// TODO complete the functionality + add tests
import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

const LiveChat = () => {
    const { t } = useTranslation();

    return (
        <Tooltip className='h-full hover:bg-disabled-100' content={t('Live chat')}>
            <img
                src='/images/pages/footer/ic-live-chat.svg'
                className='border-x border-disabled-100 px-2'
                alt='Livechat icon'
            />
        </Tooltip>
    );
};

export default LiveChat;
