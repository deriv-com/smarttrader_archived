import { DEFAULT_LANGUAGE } from 'Constants/translations';
import { getTopLevelDomain } from './utility';
import { getAppId } from './websocket/config';

export const loginUrl = () => {
    const server_url = localStorage.getItem('config.server_url');
    const language = DEFAULT_LANGUAGE;
    const signup_device = localStorage.getItem('signup_device');
    const date_first_contact = localStorage.getItem('date_first_contact');
    const marketing_queries = `&signup_device=${signup_device}${
        date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
    }`;

    return server_url && /qa/.test(server_url)
        ? `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}`
        : `https://oauth.deriv.${getTopLevelDomain()}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}`;
};
