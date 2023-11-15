import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../index';

describe('Dialog', () => {
    it('should render the Dialog component', () => {
        render(<Dialog>Dialog</Dialog>);
        const dialogElement = screen.getByText('Dialog');
        expect(dialogElement).toBeInTheDocument();
    });
    it('should open the dialog modal when the trigger is clicked', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>Content</DialogContent>
            </Dialog>
        );
        const triggerElement = screen.getByText('Trigger');
        await userEvent.click(triggerElement);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
    it('should render the Header inside the Dialog', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>
                    <DialogHeader>Header</DialogHeader>
                </DialogContent>
            </Dialog>
        );
        await userEvent.click(screen.getByText('Trigger'));
        const headerElement = screen.getByText('Header');
        expect(headerElement).toBeInTheDocument();
    });
    it('should display the Footer inside the Dialog', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>
                    <DialogHeader>Header</DialogHeader>
                    <DialogFooter>Footer</DialogFooter>
                </DialogContent>
            </Dialog>
        );
        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });
    it('should render the Dialog Title', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('Title')).toBeInTheDocument();
    });
    it('should render the Dialog description', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                        <DialogDescription>Description</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );

        await userEvent.click(screen.getByText('Trigger'));
        expect(screen.getByText('Description')).toBeInTheDocument();
    });
    it('should close the Dialog button on clicking close', async () => {
        render(
            <Dialog>
                <DialogTrigger>Trigger</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                        <DialogDescription>Description</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
        await userEvent.click(screen.getByText('Trigger'));
        const close = screen.getByRole('button', { name: 'Close' });
        expect(close).toBeInTheDocument();
        await userEvent.click(close);
        expect(screen.queryByText('Description')).not.toBeInTheDocument();
    });
});
