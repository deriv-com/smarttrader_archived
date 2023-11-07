import { Button } from 'Components/ui/button';
import { useTranslation } from 'react-i18next';
import AccountSwitcher from './AccountSwitcher';
import Notifications from './Notifications';
import AccountSettings from './AccountSettings';

const Divider = () => <div className='h-[32px] w-[1px] bg-general-section-1' />;
const LoggedInState = () => {
    const { t } = useTranslation();
    return (
        <div className='flex h-full flex-row items-center gap-3'>
            <Divider />
            <Notifications />
            <AccountSettings />
            <Divider />
            <AccountSwitcher />
            <Button size='sm' className='mx-[1.6rem] text-[14px]' asChild>
                <a href='https://app.deriv.com'>{t('Deposit')}</a>
            </Button>
        </div>
    );
};
export default LoggedInState;
