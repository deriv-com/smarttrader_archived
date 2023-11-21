import { renderHook } from '@testing-library/react';
import useQuery from 'Api/hooks/useQuery';
import useServerTime from 'Hooks/useServerTime';

jest.mock('Api/hooks/useQuery');

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;

describe('useServerTime hook', () => {
    it('should return initial server time and updates it based on the useQuery result', () => {
        // @ts-expect-error need to come up with a way to mock the return type of useQuery
        mockUseQuery.mockReturnValue({ data: { time: 1234567890 } });

        const { result } = renderHook(() => useServerTime());
        expect(result.current).toBe(1234567890);
    });

    it('should handle useQuery data being null', () => {
        // @ts-expect-error need to come up with a way to mock the return type of useQuery
        mockUseQuery.mockReturnValue({ data: { time: null } });

        const { result } = renderHook(() => useServerTime());
        expect(result.current).toBeGreaterThan(0);
    });
});
