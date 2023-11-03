import { useState } from 'react';
import PlatformSwitcher from './platform-switcher';
import Section from './section';
import LoggedOutState from './logged-out-state';
import LoggedInState from './logged-in-state';

const Header = () => {
    const [is_logged_in, setIsLoggedIn] = useState(false);
    return (
        <div className='border-section-1 flex h-12 w-full flex-row items-center justify-between border-b'>
            <div className='flex h-full flex-row'>
                <div className='flex w-[45px] flex-row items-center justify-center border-r-general-section-1 md:hidden'>
                    <img src='/images/pages/header/ic-hamburger.svg' height={20} width={20} alt='hamburger menu' />
                </div>
                <div className='flex flex-row sm:hidden xs:hidden'>
                    <PlatformSwitcher />
                    {is_logged_in && <Section />}
                </div>
            </div>
            {is_logged_in ? (
                //TODO: below wrapper div to be removed once actual login and logout functionality is implementd.
                <div onClick={() => setIsLoggedIn(false)} className='flex h-full items-center'>
                    <LoggedInState />
                </div>
            ) : (
                <div onClick={() => setIsLoggedIn(true)} className='flex h-full items-center'>
                    <LoggedOutState />
                </div>
            )}
        </div>
    );
};

export default Header;
