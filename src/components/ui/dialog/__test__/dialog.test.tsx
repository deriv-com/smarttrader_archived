import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dialog from '../Dialog';

const mock_props = {
    title: 'mock title',
    footer: <div>i am the footer content</div>,
    trigger: <div>Trigger</div>,
};

describe('Dialog', () => {
    const renderComponent = () => render(<Dialog {...mock_props}>This is the mock content</Dialog>);
    it('should render the Dialog component', () => {
        renderComponent();
        const dialogElement = screen.getByText('Trigger');
        expect(dialogElement).toBeInTheDocument();
    });
    it('should open the dialog modal when the trigger is clicked', async () => {
        renderComponent();
        const triggerElement = screen.getByText('Trigger');
        await userEvent.click(triggerElement);
        expect(screen.getByText('This is the mock content')).toBeInTheDocument();
    });
    it('should render the Header inside the Dialog', async () => {
        renderComponent();
        await userEvent.click(screen.getByText('Trigger'));
        const headerElement = screen.getByText('mock title');
        expect(headerElement).toBeInTheDocument();
    });
    it('should display the Footer inside the Dialog', async () => {
        renderComponent();
        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('i am the footer content')).toBeInTheDocument();
    });
    it('should close the modal on clicking close', async () => {
        renderComponent();
        await userEvent.click(screen.getByText('Trigger'));
        const close = screen.getByRole('button', { name: 'Close' });
        expect(close).toBeInTheDocument();
        await userEvent.click(close);
        expect(screen.queryByText('This is the mock content')).not.toBeInTheDocument();
    });
});
