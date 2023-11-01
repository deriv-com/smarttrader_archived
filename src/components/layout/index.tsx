import { Fragment, PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: PropsWithChildren) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
);

export default Layout;
