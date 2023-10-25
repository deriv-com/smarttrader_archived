import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import AccountSwitcher from 'Components/layout/header/account-switcher';
import AuthProvider from 'Contexts/authProvider';

const App = () => (
    <AuthProvider>
        <ErrorBoundary>
            <Layout>
                <AccountSwitcher />
            </Layout>
        </ErrorBoundary>
    </AuthProvider>
);

export default App;
