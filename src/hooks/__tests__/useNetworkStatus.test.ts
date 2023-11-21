import { renderHook } from '@testing-library/react';
import useAPIContext from 'Api/hooks/useAPIContext';
import useNavigatorOnline from 'Hooks/useNavigatorOnline';
import useNetworkStatus from 'Hooks/useNetworkStatus';

jest.mock('Hooks/useNavigatorOnline');
jest.mock('Api/hooks/useAPIContext');

const mockUseNavigatorOnline = useNavigatorOnline as jest.MockedFunction<typeof useNavigatorOnline>;
const mockUseAPIContext = useAPIContext as jest.MockedFunction<typeof useAPIContext>;

describe('useNetworkStatus hook', () => {
    it('should return online status when the user is online', () => {
        mockUseNavigatorOnline.mockReturnValue(true);
        mockUseAPIContext.mockReturnValue({
            socketConnection: { connection: { readyState: 1 } },
            setSocketConnection: jest.fn(),
        });
        const { result } = renderHook(() => useNetworkStatus());
        expect(result.current).toEqual({ className: 'bg-success', tooltip: 'Online' });
    });

    it('should return offline status when the user is offline', () => {
        mockUseNavigatorOnline.mockReturnValue(false);
        const closeMock = jest.fn();
        mockUseAPIContext.mockReturnValue({
            socketConnection: { connection: { readyState: 1, close: closeMock } },
            setSocketConnection: jest.fn(),
        });
        const { result } = renderHook(() => useNetworkStatus());

        expect(result.current).toEqual({ className: 'bg-danger', tooltip: 'Offline' });
        expect(closeMock).toHaveBeenCalled();
    });
});
