import { render, screen } from '@testing-library/react';
import LoggedInState from '../LoggedInState';

describe('LoggedInState', () => {
    it('should render the logged in state', () => {
        render(<LoggedInState />);
        expect(screen.getByText('Deposit')).toBeInTheDocument();
    });
});
