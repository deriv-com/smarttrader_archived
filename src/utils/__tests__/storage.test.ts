import { getAccountsFromLocalStorage, getActiveAuthToken, getActiveLoginIdFromLocalStorage } from 'Utils/storage';

describe('getAccountsFromLocalStorage function', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('should return undefined if client.accounts in localstorage is empty', () => {
        const accounts_list = getAccountsFromLocalStorage();
        expect(accounts_list).toBeUndefined();
    });
    it('should return accounts list if client.accounts in localstorage is available', () => {
        const client_accounts = { CR1234: { id: 1, name: 'Account 1', token: '1234' } };
        localStorage.setItem('client.accounts', JSON.stringify(client_accounts));
        const accounts_list = getAccountsFromLocalStorage();
        expect(accounts_list).toEqual(client_accounts);
    });
});

describe('getActiveLoginIdFromLocalStorage function', () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it('should return undefined if client.accounts in localstorage is empty', () => {
        const active_loginid = getActiveLoginIdFromLocalStorage();
        expect(active_loginid).toBeUndefined();
    });
    it('should return accounts list if client.accounts in localstorage is available', () => {
        const active_loginid = 'CR1234';
        localStorage.setItem('active_loginId', active_loginid);
        const active_loginId_storage = getActiveLoginIdFromLocalStorage();
        expect(active_loginId_storage).toEqual(active_loginid);
    });
});

describe('getActiveAuthToken function', () => {
    beforeEach(() => {
        localStorage.clear();
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=VRTC1234&cur1=eur&token1=1234',
            },
        });
    });
    it('should return token from query parameters if client.accounts and active_loginid in localstorage are unavailable', () => {
        window.location.hostname = 'example.com/?acct1=cr1234&cur1=eur&token1=1234';
        const token = getActiveAuthToken();
        expect(token).toBe('1234');
    });
    it('should return token from localstorage if client.accounts and active_loginid are available', () => {
        const active_loginid = 'CR1234';
        const client_accounts = { CR1234: { id: 1, name: 'Account 1', token: '1234' } };
        localStorage.setItem('active_loginId', active_loginid);
        localStorage.setItem('client.accounts', JSON.stringify(client_accounts));
        const token = getActiveAuthToken();

        expect(token).toBe('1234');
    });
});
