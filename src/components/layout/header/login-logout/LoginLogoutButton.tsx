import useLogin from 'Api/hooks/useLogin';
import { loginUrl } from 'Utils/login';

const LoginLogoutButton = () => {
    const { is_logged_in } = useLogin();

    return <a href={loginUrl()}>{!is_logged_in ? 'login' : 'logout'}</a>;
};

export default LoginLogoutButton;
