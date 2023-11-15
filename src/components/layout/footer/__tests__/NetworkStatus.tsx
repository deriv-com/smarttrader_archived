import { render, screen } from '@testing-library/react';
import useNavigatorOnline from 'Hooks/useNavigatorOnline';
import NetworkStatus from '../NetworkStatus';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('Utils/websocket/APIProvider');
jest.mock('Hooks/useNavigatorOnline');

const mockUseNavigatorOnline = useNavigatorOnline as jest.MockedFunction<typeof useNavigatorOnline>;

describe('NetworkStatus component', () => {
    it('Should have bg-success class when the user is online', () => {
        mockUseNavigatorOnline.mockReturnValue(true);
        render(<NetworkStatus />);
        expect(screen.getByTestId('dt_network_status_circle')).toHaveClass('bg-success');
    });

    it('Should have bg-danger class when the user is offline', () => {
        mockUseNavigatorOnline.mockReturnValue(false);
        render(<NetworkStatus />);
        expect(screen.getByTestId('dt_network_status_circle')).toHaveClass('bg-danger');
    });
});
