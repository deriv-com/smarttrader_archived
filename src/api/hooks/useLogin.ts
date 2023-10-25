import { deleteQueryParams, readLoginQueryParams } from 'Utils/url';
import useAuthorize from './useAuthorize';
import { storeClientAccounts } from 'Utils/utility';
import { useEffect, useMemo } from 'react';

const useLogin = () => {
    const search = window.location.search;
    const client_account_params = readLoginQueryParams();
    const { data: client_info } = useAuthorize();
    let is_logged_in = false;

    if (localStorage.getItem('active_loginId')) {
        is_logged_in = true;
    }

    const client_object = useMemo(() => {
        if (!client_info.account_list) return {};
        return storeClientAccounts(client_account_params, client_info.account_list);
    }, [client_info.account_list, client_account_params]);

    useEffect(() => {
        if (Object.keys(client_account_params).length && Object.keys(client_object ?? '').length) {
            localStorage.setItem('active_loginId', client_account_params.acct1);
            localStorage.setItem('client.accounts', JSON.stringify(client_object));
            if (search) deleteQueryParams();
        }
    }, [client_info, client_account_params, client_object, search]);
    return { is_logged_in };
};

export default useLogin;
