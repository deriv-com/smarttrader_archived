import * as useSubscription from '../useSubscription';
import APIProvider from 'Utils/websocket/APIProvider';
import { renderHook } from '@testing-library/react-hooks';
import useTicksHistory from '../useTicksHistory';

type UseSubscription = jest.Mock<Partial<typeof useSubscription.default>>;
type MockUseSubscription = UseSubscription &
    jest.Mock<{
        data: {
            history: { prices: number[]; times: number[] };
        };
    }>;

//@ts-expect-error dw bro we good
const mockUseSubscription: MockUseSubscription = jest.spyOn(useSubscription, 'default');

describe('useTicksHistory', () => {
    it('should return correct response after subscription and should be able to unsubscribe', async () => {
        const mockUnsubscribe = jest.fn();
        mockUseSubscription.mockReturnValue({
            data: {
                history: {
                    prices: [1, 2, 3, 4],
                    times: [1, 2, 3, 4],
                },
            },
            subscribe: jest.fn(),
            unsubscribe: mockUnsubscribe,
        });
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useTicksHistory(), { wrapper });

        const symbol = 'R_100';
        const granularity = undefined;
        const count = 1000;
        result.current.subscribe(symbol, granularity, count);
        await waitFor(() => result.current.isSubscribed, { timeout: 10000 });

        expect(mockUseSubscription).toHaveBeenCalled();
        expect(result.current.data?.history?.prices).toEqual([1, 2, 3, 4]);
        expect(result.current.data?.history?.times).toEqual([1, 2, 3, 4]);

        result.current.unsubscribe();
        expect(mockUnsubscribe).toHaveBeenCalled();
    });
});
