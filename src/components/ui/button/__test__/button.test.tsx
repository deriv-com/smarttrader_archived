import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

describe('Button component', () => {
    it('should render the button with children', async () => {
        render(<Button>Button</Button>);
        const btnElement = screen.getByText('Button');
        expect(btnElement).toBeInTheDocument();
    });

    it('should call the onClick handler when button is clicked', async () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Button</Button>);
        const btnElement = screen.getByText('Button');
        await userEvent.click(btnElement);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should apply the default styling when no props are passed', () => {
        render(<Button>Button</Button>);
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('bg-primary', 'text-white', 'text-base');
    });

    it("should apply contained secondary styling when color prop is 'secondary' and variant prop is 'contained'", () => {
        render(
            <Button variant='contained' color='secondary'>
                Button
            </Button>
        );
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('bg-secondary');
    });

    it("should apply outlined primary styling when color prop is 'primary' and variant prop is 'outlined'", () => {
        render(
            <Button variant='outlined' color='primary'>
                Button
            </Button>
        );
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('bg-transparent', 'border-primary');
    });

    it("should apply outlined secondary styling when color prop is 'secondary' and variant prop is 'outlined'", () => {
        render(
            <Button variant='outlined' color='secondary'>
                Button
            </Button>
        );
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('bg-transparent', 'border-secondary');
    });

    it("should apply outlined secondary styling when color prop is 'secondary' and variant prop is 'outlined'", () => {
        render(
            <Button variant='outlined' color='secondary'>
                Button
            </Button>
        );
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('bg-transparent', 'border-secondary');
    });

    it("should apply small size style when size prop is 'sm'", () => {
        render(<Button size='sm'>Button</Button>);
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('px-3');
    });

    it("should apply medium size style when size prop is 'md'", () => {
        render(<Button size='md'>Button</Button>);
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('text-[0.875rem]');
    });

    it("should have few same classes for size 'default' and 'md'", () => {
        render(
            <div>
                <Button size='default'>Default Button</Button>
                <Button size='md'>Medium Button</Button>
            </div>
        );
        const defaultBtnElement = screen.getByText('Default Button');
        const mediumBtnElement = screen.getByText('Medium Button');

        const commonClass = 'min-h-[2rem]';
        expect(defaultBtnElement).toHaveClass(commonClass);
        expect(mediumBtnElement).toHaveClass(commonClass);
    });

    it('should have same padding block classe for all size', () => {
        render(
            <div>
                <Button size='default'>Default Button</Button>
                <Button size='md'>Medium Button</Button>
                <Button size='sm'>Small Button</Button>
            </div>
        );
        const defaultBtnElement = screen.getByText('Default Button');
        const mediumBtnElement = screen.getByText('Medium Button');
        const smallBtnElement = screen.getByText('Small Button');

        const commonClass = 'py-1';
        expect(defaultBtnElement).toHaveClass(commonClass);
        expect(mediumBtnElement).toHaveClass(commonClass);
        expect(smallBtnElement).toHaveClass(commonClass);
    });

    it('should apply the fullwidth styling when fullwidth prop is true', () => {
        render(<Button fullwidth={true}>Full Width Button</Button>);
        const btnElement = screen.getByText('Full Width Button');
        expect(btnElement).toHaveClass('w-full');
    });

    it('should apply custom class and styles correctly', () => {
        render(
            <Button className='custom-class' style={{ fontSize: '20px' }}>
                Button
            </Button>
        );
        const btnElement = screen.getByText('Button');
        expect(btnElement).toHaveClass('custom-class');
        expect(btnElement).toHaveStyle({ fontSize: '20px' });
    });

    it('should render a disabled button when disabled prop is true', () => {
        render(<Button disabled={true}>Click me</Button>);
        const btnElement = screen.getByText('Click me');
        expect(btnElement).toBeDisabled();
    });

    it('should render the correct tag when asChild prop is true', () => {
        render(
            <Button asChild>
                <a href='/'>Link Button</a>
            </Button>
        );
        const btnElement = screen.getByRole('link');
        expect(btnElement).toBeInTheDocument();
    });
});
