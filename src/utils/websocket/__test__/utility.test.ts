import { getTopLevelDomain, storeClientAccounts } from 'Utils/utility';
import useAuthorize from 'Api/hooks/useAuthorize';

describe('getTopLevelDomain function', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: '' },
        });
    });
    it('should extract correct top level domain if hostname exists in domain_app_ids', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: 'smarttrader.deriv.app' },
        });
        const top_level_domain = getTopLevelDomain();
        expect(top_level_domain).toBe('app');
    });
    it('expect top level domain to be "com" if hostname doesnt exist in domain_app_ids', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: 'example.xyz' },
        });
        const top_level_domain = getTopLevelDomain();
        expect(top_level_domain).toBe('com');
    });
});

describe('storeClientAccounts', () => {
    it('expect client_object to be object of objects where key is loginid from account_list with token attached to each object', () => {
        const obj_params = {
            acct1: 'CR50',
            cur1: 'EUR',
            token1: '1234',
            acct2: 'MF49',
            cur2: 'EUR',
            token2: '2345',
            acct3: 'CR51',
            cur3: 'BTC',
            token3: '3456',
        };
        const account_list: ReturnType<typeof useAuthorize>['data']['account_list'] = [
            {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1675310568,
                currency: 'USD',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'svg',
                linked_to: [],
                loginid: 'CR50',
            },
            {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1675310643,
                currency: 'EUR',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'maltainvest',
                linked_to: [],
                loginid: 'MF49',
            },
            {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1677476789,
                currency: 'BTC',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'svg',
                linked_to: [],
                loginid: 'CR51',
            },
        ];

        const test_obj = {
            CR50: {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1675310568,
                currency: 'USD',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'svg',
                linked_to: [],
                loginid: 'CR50',
                token: '1234',
            },
            MF49: {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1675310643,
                currency: 'EUR',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'maltainvest',
                linked_to: [],
                loginid: 'MF49',
                token: '2345',
            },
            CR51: {
                account_category: 'trading',
                account_type: 'binary',
                created_at: 1677476789,
                currency: 'BTC',
                is_disabled: 0,
                is_virtual: 0,
                landing_company_name: 'svg',
                linked_to: [],
                loginid: 'CR51',
                token: '3456',
            },
        };

        const client_object = storeClientAccounts(obj_params, account_list);
        expect(client_object).toEqual(test_obj);
    });
});
