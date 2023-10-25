import { Fragment, PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';
import LoginLogoutButton from './header/login-logout/LoginLogoutButton';

const Layout = ({ children }: PropsWithChildren) => (
    <Fragment>
        <Header />
        {children}
        <div>
            <LoginLogoutButton />
        </div>
        <Footer />
    </Fragment>
);

export default Layout;
