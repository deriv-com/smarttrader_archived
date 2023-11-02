import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from 'Utils/cn';

export const buttonVariants = cva(
    'inline-flex items-center justify-center rounded font-bold border border-solid transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                contained: 'text-white',
                outlined: 'bg-transparent text-prominent',
            },
            color: {
                primary: 'border-primary hover:border-primary-hover focus:border-primary-hover',
                secondary: 'border-secondary',
                success: 'border-success',
            },
            size: {
                default: 'text-base',
                sm: 'text-[0.75rem] px-3',
                md: 'text-[0.875rem]',
            },
            fullwidth: {
                true: 'flex w-full',
            },
        },
        compoundVariants: [
            {
                variant: 'contained',
                color: 'primary',
                className: 'bg-primary hover:bg-primary-hover focus:bg-primary-hover',
            },
            {
                variant: 'contained',
                color: 'secondary',
                className: 'bg-secondary',
            },
            {
                variant: 'contained',
                color: 'success',
                className: 'bg-success',
            },
            {
                variant: 'outlined',
                color: 'primary',
                className: 'hover:bg-primary-hover focus:bg-primary-hover',
            },
            {
                variant: 'outlined',
                color: 'secondary',
                className: 'hover:bg-secondary/[0.08] focus:bg-secondary/[0.08]',
            },
            {
                size: ['default', 'md'],
                className: 'px-5 min-h-[2rem] min-w-[3.5rem]',
            },
            {
                size: ['default', 'md', 'sm'],
                className: 'py-1',
            },
        ],
        defaultVariants: {
            variant: 'contained',
            color: 'primary',
            size: 'default',
            fullwidth: false,
        },
    }
);

interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, color, fullwidth, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp className={cn(buttonVariants({ variant, size, color, fullwidth, className }))} ref={ref} {...props} />
        );
    }
);
Button.displayName = 'Button';

export { Button };
