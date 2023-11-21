import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Tooltip from '../index';

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('Tooltip Component', () => {
    it('Should render without errors', () => {
        render(<Tooltip content='Tooltip content'>Trigger</Tooltip>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Should show the tooltip on hover', async () => {
        render(<Tooltip content='Tooltip content'>Trigger</Tooltip>);
        expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

        const trigger_button = screen.getByRole('button');
        await userEvent.hover(trigger_button);

        const content = await screen.findAllByText('Tooltip content');
        expect(content[0]).toBeInTheDocument();
    });
});
