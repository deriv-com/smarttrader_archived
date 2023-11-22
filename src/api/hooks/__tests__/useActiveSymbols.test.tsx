import { renderHook } from '@testing-library/react-hooks';
import useActiveSymbols from '../useActiveSymbols';
import * as useLogin from '../useLogin';
import * as useQuery from '../useQuery';
import APIProvider from 'Utils/websocket/APIProvider';
import { TSocketResponseData } from 'Api/types';

type ActiveSymbols = Partial<TSocketResponseData<'active_symbols'>>;
type mockUseQuery = jest.Mock<{
    data?: { [key: number]: ActiveSymbols };
}>;

describe('useActiveSymbols', () => {
    const mockUseLogin = jest.spyOn(useLogin, 'default');
    const mockUseQuery: mockUseQuery = jest.spyOn(useQuery, 'default') as unknown as mockUseQuery;
    const mockObject = {
        data: {
            active_symbols: {
                '0': {
                    display_name: 'AUD Basket',
                    display_order: 26,
                    exchange_is_open: 1 as 0 | 1,
                    is_trading_suspended: 0 as 0 | 1,
                    market: 'synthetic_index',
                    market_display_name: 'Derived',
                    pip: 0.001,
                    subgroup: 'baskets',
                    subgroup_display_name: 'Baskets',
                    submarket: 'forex_basket',
                    submarket_display_name: 'Forex Basket',
                    symbol: 'WLDAUD',
                    symbol_type: 'forex_basket',
                },
                '1': {
                    display_name: 'AUD/CAD',
                    display_order: 10,
                    exchange_is_open: 1 as 0 | 1,
                    is_trading_suspended: 0 as 0 | 1,
                    market: 'forex',
                    market_display_name: 'Forex',
                    pip: 0.00001,
                    subgroup: 'none',
                    subgroup_display_name: 'None',
                    submarket: 'minor_pairs',
                    submarket_display_name: 'Minor Pairs',
                    symbol: 'frxAUDCAD',
                    symbol_type: 'forex',
                },
            },
        },
    };
    it('should fetch active symbols when user is logged in and not authorized', async () => {
        mockUseLogin.mockReturnValue({ isLoggedIn: true, isAuthorized: false });
        mockUseQuery.mockReturnValue(mockObject);
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useActiveSymbols(), { wrapper });
        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data).toEqual(mockObject.data.active_symbols);
    });
    it('should fetch active symbols when user is logged in and authorized', async () => {
        mockUseLogin.mockReturnValue({ isLoggedIn: true, isAuthorized: true });
        mockUseQuery.mockReturnValue(mockObject);
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useActiveSymbols(), { wrapper });
        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data).toEqual(mockObject.data.active_symbols);
    });
    it('should not fetch active symbols when user is logged in and not authorized', async () => {
        mockUseLogin.mockReturnValue({ isLoggedIn: true, isAuthorized: false });
        mockUseQuery.mockReturnValue({});
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useActiveSymbols(), { wrapper });
        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data).toEqual({});
    });
});
