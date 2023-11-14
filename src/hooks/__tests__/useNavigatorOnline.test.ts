import { describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useNavigatorOnline from 'Hooks/useNavigatorOnline';

describe('useNavigatorOnline hook', () => {
    it('Should return true by default', () => {
        const { result } = renderHook(() => useNavigatorOnline());
        expect(result.current).toBeTruthy();
    });

    it('Should update the status to true when it is online', () => {
        const { result } = renderHook(() => useNavigatorOnline());
        act(() => window.dispatchEvent(new Event('online')));
        expect(result.current).toBeTruthy();
    });

    it('Should update the status to false when it is offline', () => {
        const { result } = renderHook(() => useNavigatorOnline());
        act(() => window.dispatchEvent(new Event('offline')));
        expect(result.current).toBeFalsy();
    });

    it('Should remove event listeners on unmount', () => {
        const { unmount } = renderHook(() => useNavigatorOnline());
        const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('online', expect.any(Function));
        expect(removeEventListenerSpy).toHaveBeenCalledWith('offline', expect.any(Function));

        removeEventListenerSpy.mockRestore();
    });
});
