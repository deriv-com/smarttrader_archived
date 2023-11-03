import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Tooltip from '../index';

window.ResizeObserver =
    window.ResizeObserver ||
    vi.fn().mockImplementation(() => ({
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
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
