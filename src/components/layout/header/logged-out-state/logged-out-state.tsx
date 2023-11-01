import { useTranslation } from 'react-i18next';
import { Button } from 'Components/ui/button';

const LoggedOutState = () => {
    const { t } = useTranslation();
    return (
        <div className='mx-base flex'>
            {/* <Button className=' text-fontSize-xxl mr-1.5 border-none bg-white px-base text-primary hover:bg-red-50'>
             */}
            <Button variant='contained' color='tertiary' className='mr-1.5'>
                <a>{t('Log in')}</a>
            </Button>
            <Button variant='contained' className='rounded px-base'>
                <a href={'https://deriv.com/signup'}>{t('Sign up')}</a>
            </Button>
        </div>
    );
};

export default LoggedOutState;
