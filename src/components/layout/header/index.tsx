import { useState } from 'react';
import PlatformSwitcher from './platform-switcher';
import Tab from './tab';
import LoggedOutState from './logged-out-state';
import LoggedInState from './logged-in-state';

const Header = () => {
    const [is_logged_in, setIsLoggedIn] = useState(false);
    return (
        <div className='border-section-1 flex h-12 w-full flex-row items-center justify-between border-b'>
            <div className='flex h-full flex-row'>
                <PlatformSwitcher />
                {is_logged_in && (
                    <>
                        <Tab />
                    </>
                )}
            </div>
            <div>
                {is_logged_in ? (
                    <div onClick={() => setIsLoggedIn(false)}>
                        <LoggedInState />
                    </div>
                ) : (
                    <div onClick={() => setIsLoggedIn(true)}>
                        <LoggedOutState />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
