import { useMemo } from 'react';
import useQuery from './useQuery';
import useLogin from './useLogin';

const useActiveSymbols = () => {
    const { isLoggedIn, isAuthorized } = useLogin();
    const { data: activeSymbols, ...rest } = useQuery('active_symbols', {
        payload: { active_symbols: 'brief' },
        options: { enabled: isLoggedIn ? isAuthorized : true },
    });

    const modifiedActiveSymbols = useMemo(
        () => ({ ...activeSymbols?.active_symbols }),
        [activeSymbols?.active_symbols]
    );

    return {
        data: modifiedActiveSymbols,
        ...rest,
    };
};

export default useActiveSymbols;
