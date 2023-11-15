import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '../index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Dropdown component', () => {
    it('Should render the dropdown component', () => {
        render(
            <DropdownMenu>
                <p>This is a test children</p>
            </DropdownMenu>
        );
        expect(screen.getByText('This is a test children')).toBeInTheDocument();
    });

    it('Should open the dropdown when the Trigger is clicked', async () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>item</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('item')).toBeInTheDocument();
    });

    it('Should render the dropdown with the passed classNames', async () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger className='bg-red'>Trigger</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='m-1'>item</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const trigger_button = screen.getByText('Trigger');
        expect(trigger_button).toHaveClass('bg-red');
        await userEvent.click(trigger_button);
        expect(screen.getByText('item')).toHaveClass('m-1');
    });

    it("Should render the content's label", async () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Test Label</DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('Should close the dropdown when an item clicked', async () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>item</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        await userEvent.click(screen.getByText('Trigger'));
        const dropdown_item = screen.getByText('item');
        await userEvent.click(dropdown_item);
        expect(dropdown_item).not.toBeInTheDocument();
    });

    it('Should show the dropdown menu separator', async () => {
        render(
            <DropdownMenu>
                <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Test Label</DropdownMenuLabel>
                    <DropdownMenuSeparator data-testid='dt_dropdown_menu_separator' />
                    <DropdownMenuItem>item</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByTestId('dt_dropdown_menu_separator')).toBeInTheDocument();
    });
});
