import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlatformSwitcher from '../PlatformSwitcher';
import userEvent from '@testing-library/user-event';

describe('PlatformSwitcher component', () => {
    test('renders the SmartTrader label', () => {
        render(<PlatformSwitcher />);
        const smartTraderLabel = screen.getByText('SmartTrader');
        expect(smartTraderLabel).toBeInTheDocument();
    });

    test('opens the dropdown menu when clicked', async () => {
        render(<PlatformSwitcher />);
        const trigger = screen.getByText('SmartTrader');

        // Dropdown should be closed initially
        let dropdownContent = screen.queryByTestId('dt_dropdown_content');
        expect(dropdownContent).not.toBeInTheDocument();

        // Click to open the dropdown
        await userEvent.click(trigger);

        // Dropdown should be open
        dropdownContent = screen.queryByTestId('dt_dropdown_content');
        expect(dropdownContent).toBeInTheDocument();
    });
});
