import { renderHook } from '@testing-library/react-hooks';
import APIProvider from 'Utils/websocket/APIProvider';
import useLogin from '../useLogin';
import * as utilsURL from 'Utils/url';

jest.mock('../useAuthorize', () => ({
    __esModule: true,
    default: jest.fn(() => {
        return {
            data: {
                loginid: 'CR123',
                account_list: [
                    {
                        currency: 'USD',
                        is_virtual: 0,
                        loginid: 'CR123',
                    },
                    {
                        currency: 'AUD',
                        is_virtual: 0,
                        loginid: 'AB123',
                    },
                ],
            },
        };
    }),
}));

describe('useLogin', () => {
    it('isLoggedIn should be true if active_loginId exists', () => {
        localStorage.setItem('active_loginId', 'CR123');
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;
        const { result } = renderHook(() => useLogin(), { wrapper });

        expect(result.current.isLoggedIn).toBe(true);
    });
    it('local storage active_loginId and client.accounts should have correct data', async () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=CR123&token1=testToken1&cur1=USD&acct2=AB123&token2=testToken2&cur2=AUD',
            },
        });
        jest.spyOn(utilsURL, 'deleteQueryParams').mockImplementation(jest.fn());
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useLogin(), { wrapper });
        await waitFor(() => result.current.isAuthorized, { timeout: 10000 });

        const expectedClientAccounts = {
            CR123: { currency: 'USD', is_virtual: 0, loginid: 'CR123', token: 'testToken1' },
            AB123: { currency: 'AUD', is_virtual: 0, loginid: 'AB123', token: 'testToken2' },
        };

        const parsedExpected = JSON.parse(JSON.stringify(expectedClientAccounts));
        const parsedReceived = JSON.parse(localStorage.getItem('client.accounts') || '{}');

        expect(localStorage.getItem('active_loginId')).toBe('CR123');
        expect(parsedReceived).toEqual(parsedExpected);
        expect(utilsURL.deleteQueryParams).toHaveBeenCalled();
    });
});
