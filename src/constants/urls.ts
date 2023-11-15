const derivComUrl = 'deriv.com';
const derivMeUrl = 'deriv.me';
const derivBeUrl = 'deriv.be';

const isBrowser = () => typeof window !== 'undefined';

const supportedDomains = [derivComUrl, derivMeUrl, derivBeUrl];
const domainUrlInitial = (isBrowser() && window.location.hostname.split('app.')[1]) || '';
const domainUrl = supportedDomains.includes(domainUrlInitial) ? domainUrlInitial : derivComUrl;

export const derivUrls = Object.freeze({
    DERIV_HOST_NAME: domainUrl,
    DERIV_COM_PRODUCTION: `https://${domainUrl}`,
    DERIV_COM_PRODUCTION_EU: `https://eu.${domainUrl}`,
    DERIV_COM_STAGING: `https://staging.${domainUrl}`,
    DERIV_APP_PRODUCTION: `https://app.${domainUrl}`,
    DERIV_APP_STAGING: `https://staging-app.${domainUrl}`,
    SMARTTRADER_PRODUCTION: `https://smarttrader.${domainUrl}`,
    SMARTTRADER_STAGING: `https://staging-smarttrader.${domainUrl}`,
    BINARYBOT_PRODUCTION: `https://bot.${domainUrl}`,
    BINARYBOT_STAGING: `https://staging-bot.${domainUrl}`,
});

let defaultLanguage: string;

const normalizePath = (path: string) => (path ? path.replace(/(^\/|\/$|[^a-zA-Z0-9-_./()#])/g, '') : '');

export const getStaticUrl = (path: string) => {
    const host = derivUrls.DERIV_COM_PRODUCTION;
    let lang = defaultLanguage?.toLowerCase();

    if (lang && lang !== 'en') {
        lang = `/${lang}`;
    } else {
        lang = '';
    }

    // Deriv.com supports languages separated by '-' not '_'
    if (host === derivUrls.DERIV_COM_PRODUCTION && lang.includes('_')) {
        lang = lang.replace('_', '-');
    }

    return `${host}${lang}/${normalizePath(path)}`;
};

export const redirectToSignUp = () => {
    window.open(getStaticUrl('/signup/'));
};

export const setUrlLanguage = (language: string) => {
    defaultLanguage = language;
};

// URLS
export const helpCenterURL = '/help-centre/';
export const whatsAppURL = 'https://wa.me/35699578341';
export const accountSettingsURL = 'https://app.deriv.com/account/personal-details';
