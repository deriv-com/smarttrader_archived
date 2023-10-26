import { AuthorizeResponse } from '@deriv/api-types';
import { getActiveAuthTokenFromQueryParameters } from './url';

type TAccount = {
    token: string;
    accepted_bch: number;
    landing_company_shortcode: string;
    residence: string;
    session_start: number;
};

type TAccountsList = {
    [k: string]: TAccount &
        NonNullable<NonNullable<NonNullable<AuthorizeResponse['authorize']>['account_list']>>[number];
};

/**
 * Gets the current user `accounts` list from the `localStorage`.
 */
export const getAccountsFromLocalStorage = () => {
    const data = localStorage.getItem('client.accounts');

    // If there is no accounts list, return undefined.
    if (!data) return;
    // Cast parsed JSON data to infer return type
    return JSON.parse(data) as TAccountsList;
};

/**
 * Gets the active `loginid` for the current user from the `localStorage`.
 */
export const getActiveLoginIdFromLocalStorage = () => {
    const active_loginid = localStorage.getItem('active_loginId');

    // If there is no active loginid, return undefined.
    if (!active_loginid) return;

    return active_loginid;
};

export const getActiveAuthToken = () => {
    const accounts = getAccountsFromLocalStorage();
    const active_loginid = getActiveLoginIdFromLocalStorage();
    const token_from_query_params = getActiveAuthTokenFromQueryParameters();

    if (accounts?.[active_loginid ?? '']) return accounts?.[active_loginid ?? '']?.token;
    return token_from_query_params;
};
