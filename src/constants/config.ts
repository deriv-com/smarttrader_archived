export const domain_app_ids = Object.freeze({
    'smarttrader.deriv.app': 22168,
    'smarttrader.deriv.com': 22168,
    'smarttrader.deriv.me': 27315,
    'smarttrader.deriv.be': 31224,
    'staging-smarttrader.deriv.be': 31191,
    'staging-smarttrader.deriv.com': 22169,
});

export const LOCALHOST_APP_ID = 39852;

export const PRODUCTION_APP_ID = 22168;

export const STAGING_APP_ID = 22169;

export const SERVER_URL = (is_real: boolean) => {
    return is_real ? 'green.binaryws.com' : 'blue.binaryws.com';
};
