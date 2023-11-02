import { useTranslation } from 'react-i18next';
import { Button } from 'Components/ui/button';

const LoggedOutState = () => {
    const { t } = useTranslation();
    return (
        <div className='mx-base flex'>
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
