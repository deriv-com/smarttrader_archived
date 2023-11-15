import { render, screen } from '@testing-library/react';
import HelpCenter from '../HelpCenter';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('HelpCenter Component', () => {
    it('Should render Help Center icon', () => {
        render(<HelpCenter />);
        expect(screen.getByAltText('Help center icon')).toBeInTheDocument();
    });

    it('Should render a link with the Help Center URL', () => {
        render(<HelpCenter />);
        const helpCenterLink = screen.getByRole('link');
        expect(helpCenterLink).toBeInTheDocument();
        expect(helpCenterLink).toHaveAttribute('href', 'https://deriv.com/help-centre');
    });

    it('Should have the correct CSS classes', () => {
        render(<HelpCenter />);
        expect(screen.getByRole('button')).toHaveClass('h-full px-3 hover:bg-disabled-100');
    });
});
