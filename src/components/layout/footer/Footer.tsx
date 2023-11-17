import FullScreen from './FullScreen';
import HelpCenter from './HelpCenter';
import LanguageSettings from './LanguageSettings';
import LiveChat from './Livechat';
import NetworkStatus from './NetworkStatus';
import ServerTime from './ServerTime';
import WhatsApp from './WhatsApp';

const Footer = () => (
    <footer className='fixed bottom-0 hidden h-9 w-full items-center justify-end border-t border-general-section-1 md:flex'>
        <NetworkStatus />
        <LanguageSettings />
        <ServerTime />
        <WhatsApp />
        <LiveChat />
        <HelpCenter />
        <FullScreen />
    </footer>
);

export default Footer;
