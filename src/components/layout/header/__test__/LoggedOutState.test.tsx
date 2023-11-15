import { render, screen } from '@testing-library/react';
import LoggedInState from '../LoggedInState';

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

describe('LoggedInState', () => {
    it('should render the logged in state', () => {
        render(<LoggedInState />);
        expect(screen.getByText('Deposit')).toBeInTheDocument();
    });
});
