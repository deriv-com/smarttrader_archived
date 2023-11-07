import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PlatformSwitcher from '../PlatformSwitcher';

describe('PlatformSwitcher component', () => {
    test('renders the SmartTrader label', () => {
        render(<PlatformSwitcher />);
        const smartTraderLabel = screen.getByText('SmartTrader');
        expect(smartTraderLabel).toBeInTheDocument();
    });

    test('renders the "Looking for CFDs? Go to Trader\'s Hub" link', () => {
        render(<PlatformSwitcher />);
        const link = screen.getByText("Looking for CFDs? Go to Trader's Hub");
        expect(link).toBeInTheDocument();
    });

    test('opens the dropdown menu when clicked', () => {
        render(<PlatformSwitcher />);
        const trigger = screen.getByText('SmartTrader');

        // Dropdown should be closed initially
        let dropdownContent = screen.queryByTestId('dropdown-content');
        expect(dropdownContent).not.toBeInTheDocument();

        // Click to open the dropdown
        trigger.click();

        // Dropdown should be open
        dropdownContent = screen.queryByTestId('dropdown-content');
        expect(dropdownContent).toBeInTheDocument();
    });
});
