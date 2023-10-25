import { Button } from 'Components/ui/button';
import AccountSwitcher from '../account-switcher';
import Notifications from '../notifications';

const LoggedInState = () => {
    return (
        <div className='flex flex-row items-center gap-1'>
            <AccountSwitcher />
            <Notifications />
            <Button size='sm' className='mx-[1.6rem] text-[14px]'>
                Deposit
            </Button>
        </div>
    );
};

export default LoggedInState;
