// TODO complete the functionality + add tests
import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

const LiveChat = () => {
    const { t } = useTranslation();

    return (
        <Tooltip content={t('Live chat')}>
            <button className='h-9 hover:bg-disabled-100'>
                <img
                    src='/images/pages/footer/ic-live-chat.svg'
                    className='border-x border-disabled-100 px-2'
                    alt='Livechat icon'
                />
            </button>
        </Tooltip>
    );
};

export default LiveChat;
