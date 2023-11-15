import useLogin from 'Api/hooks/useLogin';
import LoggedInState from './LoggedInState';
import LoggedOutState from './LoggedOutState';
import PlatformSwitcher from './PlatformSwitcher';
import SectionTab from './SectionTab';

const Header = () => {
    //logic for uselogin to be changed to add listener to storage
    const { is_logged_in } = useLogin();

    return (
        <div className='border-section-1 flex h-12 w-full flex-row items-center justify-between border-b'>
            <div className='flex h-full flex-row'>
                <div className='flex w-[45px] flex-row items-center justify-center border-r-general-section-1 md:hidden'>
                    <img src='/images/pages/header/ic-hamburger.svg' height={20} width={20} alt='Hamburger menu' />
                </div>
                <div className='flex flex-row sm:hidden xs:hidden'>
                    <PlatformSwitcher />
                    {is_logged_in && <SectionTab />}
                </div>
            </div>
            <div className='flex h-full items-center'>{is_logged_in ? <LoggedInState /> : <LoggedOutState />}</div>
        </div>
    );
};

export default Header;
