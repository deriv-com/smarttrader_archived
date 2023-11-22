import { renderHook } from '@testing-library/react-hooks';
import { TSocketResponse } from '../../types';
import APIProvider from 'Utils/websocket/APIProvider';
import useMutation from '../useMutation';

jest.mock('../useAPI', () => ({
    ...jest.requireActual('../useAPI'),
    __esModule: true,
    default: () => ({
        send: jest.fn(() =>
            Promise.resolve<TSocketResponse<'topup_virtual'>>({
                msg_type: 'topup_virtual',
                topup_virtual: {
                    amount: 1234,
                    currency: 'USD',
                },
                echo_req: {},
            })
        ),
        subscribe: jest.fn(),
    }),
}));

describe('useMutation', () => {
    test('should call verify_email and get 1 in response', async () => {
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useMutation('topup_virtual'), { wrapper });

        result.current.mutate();

        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data?.topup_virtual?.amount).toEqual(1234);
        expect(result.current.data?.topup_virtual?.currency).toBe('USD');
    });
});
