import { render, screen } from '@testing-library/react';
import WhatsApp from '../WhatsApp';
import { whatsAppURL } from 'Constants/urls';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('WhatsApp Component', () => {
    it('Should render WhatsApp icon', () => {
        render(<WhatsApp />);
        expect(screen.getByAltText('WhatsApp icon')).toBeInTheDocument();
    });

    it('Should render a link with the WhatsApp URL', () => {
        render(<WhatsApp />);
        const whatsAppLink = screen.getByRole('link');
        expect(whatsAppLink).toBeInTheDocument();
        expect(whatsAppLink).toHaveAttribute('href', whatsAppURL);
    });

    it('Should have the correct CSS classes', () => {
        render(<WhatsApp />);
        expect(screen.getByRole('button')).toHaveClass('h-full px-2 hover:bg-disabled-100');
    });
});
