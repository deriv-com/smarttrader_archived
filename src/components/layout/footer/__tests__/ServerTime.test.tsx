import { render, screen } from '@testing-library/react';
import ServerTime from '../ServerTime';

jest.mock('Hooks/useServerTime', () => () => 1234567890);

describe('ServerTime component', () => {
    it('should render the component with correct time format', () => {
        render(<ServerTime />);
        expect(screen.getByText('2009-02-13 23:31:30 GMT')).toBeInTheDocument();
    });
});
