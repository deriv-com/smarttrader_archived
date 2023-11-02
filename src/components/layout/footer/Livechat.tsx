// TODO complete the functionality + add tests + complete the ui
import Tooltip from 'Components/common/tooltip';

const LiveChat = () => {
    return (
        <Tooltip content='Live chat'>
            <button className='h-9 px-2 hover:bg-disabled-100'>
                <img src='/images/pages/footer/ic-live-chat.svg' alt='Livechat icon' />
            </button>
        </Tooltip>
    );
};

export default LiveChat;
