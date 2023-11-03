import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import StaticUrl from '..';

const testUrl = 'testUrl';

vi.mock('Constants/urls', () => ({
    getStaticUrl: (url: string) => `/mockedUrl/${url}`,
    setUrlLanguage: (language: string) => language,
}));

vi.mock('Constants/translations', () => ({
    getLanguage: () => 'en',
}));

describe('StaticUrl Component', () => {
    it('Should render a link with the corrected href', () => {
        render(<StaticUrl href={testUrl}>Link Text</StaticUrl>);
        const link = screen.getByRole('link', { name: 'Link Text' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/mockedUrl/testUrl');
    });

    it('Should render children content', () => {
        render(<StaticUrl href={testUrl}>Link Text</StaticUrl>);
        const link = screen.getByRole('link', { name: 'Link Text' });
        expect(link).toHaveTextContent('Link Text');
    });

    it('Should have the correct HTML attributes', () => {
        render(
            <StaticUrl href={testUrl} rel='noopener noreferrer'>
                Link Text
            </StaticUrl>
        );
        const link = screen.getByRole('link', { name: 'Link Text' });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
