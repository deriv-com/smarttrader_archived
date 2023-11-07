import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccountSettings from '../AccountSettings';

describe('AccountSettings', () => {
    it('should render the account settings icon', () => {
        render(<AccountSettings />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/pages/header/ic-user-outline.svg');
        expect(image).toHaveAttribute('alt', 'Account settings');
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://app.deriv.com/account/personal-details');
    });
});
