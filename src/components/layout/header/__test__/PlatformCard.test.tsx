import { render, screen } from '@testing-library/react';
import PlatformCard from '../PlatformCard';

describe('PlatformCard component', () => {
    const mockData = {
        src: '/test-image.png',
        title: 'Test Title',
        alt: 'Test Alt Text',
        path: '/test-path',
    };

    test('renders the component with the provided data', () => {
        render(<PlatformCard {...mockData} />);

        // Check if the image, title, and alt text are rendered
        const imageElement = screen.getByAltText(mockData.alt);
        expect(imageElement).toBeInTheDocument();

        const titleElement = screen.getByText(mockData.title);
        expect(titleElement).toBeInTheDocument();

        // Check if the link points to the correct path
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', mockData.path);
    });
});
