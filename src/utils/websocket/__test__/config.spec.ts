import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { getAppId, getCurrentDomain, getSocketURL } from '../config';
import { LOCALHOST_APP_ID, PRODUCTION_APP_ID, STAGING_APP_ID } from 'Constants/config';

describe('getAppId function', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: 'example.com' },
        });
    });

    it('should return STAGING_APP_ID for staging hostname patterns', () => {
        window.location.hostname = 'smarttrader-staging.deriv.app';
        let app_id = getAppId();
        expect(app_id).toEqual(STAGING_APP_ID);

        window.location.hostname = 'staging-smarttrader.deriv.com';
        app_id = getAppId();
        expect(app_id).toEqual(STAGING_APP_ID);

        window.location.hostname = 'staging-smarttrader.deriv.app';
        app_id = getAppId();
        expect(app_id).toEqual(STAGING_APP_ID);
    });
    it('should return LOCALHOST_APP_ID for localhost hostname', () => {
        window.location.hostname = 'localhost:1234';
        let app_id = getAppId();
        expect(app_id).toEqual(LOCALHOST_APP_ID);

        window.location.hostname = 'staging-smarttrader.deriv.com';
        app_id = getAppId();
        expect(app_id).not.toEqual(LOCALHOST_APP_ID);
    });
    it('should return PRODUCTION_APP_ID for production hostname', () => {
        window.location.hostname = 'smarttrader.deriv.com';
        const app_id = getAppId();
        expect(app_id).toEqual(PRODUCTION_APP_ID);
    });
    it('should return APP_ID that exists in domain_app_ids', () => {
        window.location.hostname = 'staging-smarttrader.deriv.be';
        const app_id = getAppId();
        expect(app_id).toEqual(31191);
    });
});

describe('getCurrentDomain function', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: 'smarttrader.deriv.app' },
        });
    });
    it('should return the correct domain if it exists in domain_app_ids', () => {
        const result = getCurrentDomain();
        expect(result).toBe('smarttrader.deriv.app');
    });

    it('should return the correct domain with www subdomain if it exists in domain_app_ids', () => {
        window.location.hostname = 'www.smarttrader.deriv.com';
        const result = getCurrentDomain();
        expect(result).toBe('smarttrader.deriv.com');
    });

    it('should return null for an unknown domain that doesnt exist in domain_app_ids', () => {
        window.location.hostname = 'unknown.domain.com';
        const result = getCurrentDomain();
        expect(result).toBeUndefined();
    });
});

describe('getSocketURL function', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should return server_url if it already exists inside local storage', () => {
        localStorage.setItem('config.server_url', 'green.binaryws.com');
        const server_url = getSocketURL();
        expect(server_url).toBe('green.binaryws.com');
    });
    it('should return server_url from search parameters if it exist and server_url should be blue.binaryws.com', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: {
                hostname: 'smarttrader.deriv.app',
                search: '?acct1=VRTC1234',
            },
        });
        const server_url = getSocketURL();
        expect(server_url).toBe('blue.binaryws.com');
    });
    it('should return server_url from active_loginId if it exist in localstorage and server_url should be green.binaryws.com', () => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { hostname: `smarttrader.deriv.app` },
        });
        localStorage.setItem('active_loginId', 'CR1234');
        const server_url = getSocketURL();
        expect(server_url).toBe('green.binaryws.com');
    });
});
