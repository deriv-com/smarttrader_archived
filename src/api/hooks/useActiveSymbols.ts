import { useMemo } from 'react';
import useQuery from './useQuery';
import useLogin from './useLogin';

const useActiveSymbols = () => {
    const { is_logged_in, isAuthorized } = useLogin();
    const { data: active_symbols, ...rest } = useQuery('active_symbols', {
        payload: { active_symbols: 'brief' },
        options: { enabled: is_logged_in ? isAuthorized : true },
    });

    const modified_active_symbols = useMemo(
        () => ({ ...active_symbols?.active_symbols }),
        [active_symbols?.active_symbols]
    );

    return {
        data: modified_active_symbols,
        ...rest,
    };
};

export default useActiveSymbols;
