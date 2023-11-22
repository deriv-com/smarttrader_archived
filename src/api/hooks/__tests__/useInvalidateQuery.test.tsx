import { renderHook } from '@testing-library/react-hooks';
import { useQueryClient } from '@tanstack/react-query';
import useInvalidateQuery from '../useInvalidateQuery';

jest.mock('@tanstack/react-query', () => ({
    useQueryClient: jest.fn(),
}));

describe('useInvalidateQuery', () => {
    it('should invalidate single query', () => {
        const mockInvalidateQueries = jest.fn();
        (useQueryClient as jest.Mock).mockReturnValue({
            invalidateQueries: mockInvalidateQueries,
        });

        const { result } = renderHook(() => useInvalidateQuery());

        result.current('authorize');

        expect(mockInvalidateQueries).toHaveBeenCalledWith(['authorize'], undefined);
    });
});
