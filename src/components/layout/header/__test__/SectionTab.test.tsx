import { render, screen } from '@testing-library/react';
import SectionTab from '../SectionTab';

describe('SectionTab', () => {
    it('should render the sections tabs', () => {
        render(<SectionTab />);
        const images = screen.getAllByRole('img');
        expect(images.length).toHaveLength(3);
        expect(images[0]).toHaveAttribute('src', '/images/pages/header/ic-appstore-home.svg');
        expect(images[0]).toHaveAttribute('alt', 'Traders Hub');
        expect(images[1]).toHaveAttribute('src', '/images/pages/header/ic-reports.svg');
        expect(images[1]).toHaveAttribute('alt', 'Reports');
        expect(images[2]).toHaveAttribute('src', '/images/pages/header/ic-cashier.svg');
        expect(images[2]).toHaveAttribute('alt', 'Cashier');
    });
});
