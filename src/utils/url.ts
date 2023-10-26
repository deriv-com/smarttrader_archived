export const readLoginQueryParams = () => {
    const obj_params: { [key: string]: string } = {};
    const search = window.location.search;

    if (search) {
        const search_params = new URLSearchParams(window.location.search);
        search_params.forEach((value, key) => {
            const account_keys = ['acct', 'token', 'cur'];
            const is_account_param = account_keys.some(
                account_key => key?.includes(account_key) && key !== 'affiliate_token'
            );

            if (is_account_param) {
                obj_params[key] = value;
            }
        });

        // delete account query params - but keep other query params (e.g. utm)
    }
    return obj_params;
};

export const getActiveAuthTokenFromQueryParameters = () => {
    return readLoginQueryParams().token1;
};

export const deleteQueryParams = () => {
    const search = window.location.search;
    const obj_params = readLoginQueryParams();

    if (search) {
        let search_params = new URLSearchParams(window.location.search);
        Object.keys(obj_params).forEach(key => search_params.delete(key));
        search_params.delete('state'); // remove unused state= query string
        search_params = search_params?.toString() as unknown as URLSearchParams;
        const search_param_without_account = search_params ? `?${search_params}` : '/';
        history.replaceState(null, '', `${search_param_without_account}${window.location.hash}`);
    }
};
