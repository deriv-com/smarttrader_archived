import useLogin from 'Api/hooks/useLogin';
import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';

const App = () => {
    useLogin();
    return (
        <ErrorBoundary>
            <Layout>App</Layout>
        </ErrorBoundary>
    );
};

export default App;
