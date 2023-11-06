import { useTranslation } from 'react-i18next';
import { Button } from 'Components/ui/button';
import { loginUrl } from 'Utils/login';
import { redirectToSignUp } from 'Constants/urls';

const LoggedOutState = () => {
    const { t } = useTranslation();
    return (
        <div className='mx-base flex'>
            <Button variant='contained' color='tertiary' className='mr-1.5' asChild>
                <a href={loginUrl()}>{t('Log in')}</a>
            </Button>
            <Button variant='contained' className='rounded px-base' asChild onClick={redirectToSignUp}>
                <a>{t('Sign up')}</a>
            </Button>
        </div>
    );
};

export default LoggedOutState;
