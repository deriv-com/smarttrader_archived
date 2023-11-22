import useAuthorize from 'Api/hooks/useAuthorize';
import { getCurrentDomain } from './websocket/config';

type TObjParams<T extends number> = {
    [K in `acct${T}`]: string;
} & {
    [K in `cur${T}`]: string;
} & {
    [K in `token${T}`]: string;
};

type TModifiedAccountsList = NonNullable<ReturnType<typeof useAuthorize>['data']['account_list']>[number] & {
    token?: string;
};

type TClientObject = Record<string, TModifiedAccountsList>;

export const storeClientAccounts = (
    obj_params: TObjParams<number>,
    account_list: ReturnType<typeof useAuthorize>['data']['account_list']
) => {
    const client_object = {} as TClientObject;
    let active_loginid = '';

    account_list?.forEach(account => {
        if (!account.loginid) return;
        client_object[account.loginid!] = account;
    });

    let i = 1;
    while (obj_params[`acct${i}`]) {
        const loginid = obj_params[`acct${i}`];
        const token = obj_params[`token${i}`];
        if (loginid && token) {
            client_object[loginid].token = token;
        }
        i++;
    }

    // if didn't find any login ID that matched the above condition
    // or the selected one doesn't have a token, set the first one
    if (!active_loginid || !client_object[active_loginid].token) {
        active_loginid = obj_params.acct1;
    }
    return client_object;
};

export const getTopLevelDomain = () => {
    const current_domain = getCurrentDomain();
    return current_domain ? current_domain.split('.').splice(-1).pop() : 'com';
};
