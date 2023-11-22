import useQuery from '../useQuery';
import { TSocketResponse } from 'Api/types';
import APIProvider from 'Utils/websocket/APIProvider';
import { renderHook } from '@testing-library/react-hooks';

jest.mock('../useAPI', () => ({
    ...jest.requireActual('../useAPI'),
    __esModule: true,
    default: () => ({
        send: jest.fn(() =>
            Promise.resolve<TSocketResponse<'time'>>({
                msg_type: 'time',
                time: 1234,
                echo_req: {},
            })
        ),
        subscribe: jest.fn(),
    }),
}));

describe('useQuery', () => {
    it('should return correct time in response', async () => {
        const wrapper = ({ children }: { children: JSX.Element }) => <APIProvider>{children}</APIProvider>;

        const { result, waitFor } = renderHook(() => useQuery('time'), { wrapper });
        await waitFor(() => result.current.isSuccess, { timeout: 10000 });

        expect(result.current.data?.time).toEqual(1234);
    });
});
