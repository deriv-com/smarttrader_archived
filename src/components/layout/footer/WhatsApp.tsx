// TODO complete the functionality + add tests + complete the ui
import Tooltip from 'Components/common/tooltip';

const WhatsApp = () => {
    return (
        <Tooltip content='WhatsApp'>
            <button className='h-9 px-2 hover:bg-disabled-100'>
                <img src='/images/pages/footer/ic-whatsapp.svg' alt='Whatsapp icon' />
            </button>
        </Tooltip>
    );
};

export default WhatsApp;
