import { Fragment, PropsWithChildren } from 'react';
import Header from './header';
import Footer from './Footer/Footer';

const Layout = ({ children }: PropsWithChildren) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
);

export default Layout;
