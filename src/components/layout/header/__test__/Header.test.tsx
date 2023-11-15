import { render, screen } from '@testing-library/react';
import Header from '..';
import * as useLoginHooks from 'Api/hooks/useLogin';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('Header', () => {
    const useLoginSpy = jest.spyOn(useLoginHooks, 'default');
    it('should render the component', () => {
        useLoginSpy.mockReturnValue({ is_logged_in: false });
        render(<Header />);
        expect(screen.getByText('SmartTrader')).toBeInTheDocument();
        expect(screen.getByText('Log in')).toBeInTheDocument();
        expect(screen.getByText('Sign up')).toBeInTheDocument();
    });
    it('should render the layout in the logged in state', () => {
        useLoginSpy.mockReturnValue({ is_logged_in: true });
        render(<Header />);
        expect(screen.getByText('Deposit')).toBeInTheDocument();
    });
});
