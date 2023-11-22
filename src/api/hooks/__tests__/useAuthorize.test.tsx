import { renderHook } from '@testing-library/react-hooks';
import useAuthorize from '../useAuthorize';
import * as storageUtils from 'Utils/storage';
import * as useInvalidateQueryModule from '../useInvalidateQuery';
import APIProvider from 'Utils/websocket/APIProvider';

jest.mock('../useQuery', () => ({
    __esModule: true,
    default: jest.fn(() => {
        return {
            data: {
                authorize: {
                    loginid: 'CRW909901',
                    account_list: [
                        {
                            account_category: 'wallet',
                            currency: 'USD',
                            is_virtual: 0,
                        },
                    ],
                },
            },
        };
    }),
}));

describe('useAuthorize', () => {
    it('Should return authorization data when given a token', async () => {
        const mockToken = 'mockToken123';
        jest.spyOn(storageUtils, 'getActiveAuthToken').mockReturnValue(mockToken);
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useAuthorize(), { wrapper });
        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data).toEqual({
            loginid: 'CRW909901',
            account_list: [
                {
                    account_category: 'wallet',
                    currency: 'USD',
                    is_virtual: 0,
                },
            ],
        });
    });
    it('Switches account and invalidates query', () => {
        const mockToken = 'mockToken123';
        jest.spyOn(storageUtils, 'getActiveAuthToken').mockReturnValue(mockToken);
        const invalidateMock = jest.fn();
        jest.spyOn(useInvalidateQueryModule, 'default').mockReturnValue(invalidateMock);

        const { result } = renderHook(() => useAuthorize());
        const loginId = 'newLoginId123';
        result.current.switchAccount(loginId);

        expect(localStorage.getItem('active_loginId')).toBe(loginId);
        expect(invalidateMock).toHaveBeenCalledWith('authorize');
    });
});
