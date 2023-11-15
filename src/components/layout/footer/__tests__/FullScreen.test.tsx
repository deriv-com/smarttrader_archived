import { render, screen } from '@testing-library/react';
import FullScreen from '../FullScreen';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('FullScreen Component', () => {
    it('Should render Full Screen icon', () => {
        render(<FullScreen />);
        expect(screen.getByAltText('Full screen icon')).toBeInTheDocument();
    });

    it('Should have the correct CSS classes', () => {
        render(<FullScreen />);
        expect(screen.getByRole('button')).toHaveClass('h-full px-2 hover:bg-disabled-100');
    });
});
