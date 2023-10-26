import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import AuthProvider from 'Contexts/authProvider';

const App = () => (
    <AuthProvider>
        <ErrorBoundary>
            <Layout>App</Layout>
        </ErrorBoundary>
    </AuthProvider>
);

export default App;
