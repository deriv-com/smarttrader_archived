import i18n from 'i18next';

export const DEFAULT_LANGUAGE = 'EN';

export const LANGUAGE_KEY = 'i18n_language';

export const SUPPORTED_LANGUAGES = Object.freeze({
    //   ACH: "Translations",
    EN: 'English',
    DE: 'Deutsch',
    ES: 'Español',
    FR: 'Français',
    IT: 'Italiano',
    PL: 'Polish',
    RU: 'Русский',
    TH: 'ไทย',
    VI: 'Tiếng Việt',
    ID: 'Indonesian',
    KO: '한국어',
    ZH_CN: '简体中文',
    ZH_TW: '繁體中文',
});

const getInitialLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');
    const localStorageLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (queryLang) {
        const queryLangUppercase = queryLang.toUpperCase();
        if (queryLangUppercase) {
            localStorage.setItem(LANGUAGE_KEY, queryLangUppercase);
            return queryLangUppercase;
        }
    }

    if (localStorageLanguage) {
        return localStorageLanguage;
    }

    return DEFAULT_LANGUAGE;
};

const initialLanguage = getInitialLanguage();

export const getLanguage = () => i18n.language || initialLanguage;
