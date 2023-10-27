import { readLoginQueryParams, getActiveAuthTokenFromQueryParameters, deleteQueryParams } from 'Utils/url';
import { describe, expect, it } from 'vitest';

describe('readLoginQueryParams function', () => {
    it('should create correct object that correspond to query params', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=VRTC1234&cur1=eur&token1=1234&acct2=CR1234&cur2=usd&token2=1234',
            },
        });
        const test_object = {
            acct1: 'VRTC1234',
            cur1: 'eur',
            token1: '1234',
            acct2: 'CR1234',
            cur2: 'usd',
            token2: '1234',
        };
        const obj_params = readLoginQueryParams();
        expect(obj_params).toEqual(test_object);
    });
});

describe('getActiveAuthTokenFromQueryParameters function', () => {
    it('should return token1 from query parameters', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=VRTC1234&cur1=eur&token1=5678&acct2=CR1234&cur2=usd&token2=1234',
            },
        });
        const token = getActiveAuthTokenFromQueryParameters();
        expect(token).toBe('5678');
    });
});

describe('deleteQueryParams function', () => {
    it('should return token1 from query parameters', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=VRTC1234&cur1=eur&token1=5678&acct2=CR1234&cur2=usd&token2=1234',
            },
        });
        const query_params = deleteQueryParams();
        expect(query_params).toBeUndefined();
    });
});
