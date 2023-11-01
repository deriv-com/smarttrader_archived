import { cva } from 'class-variance-authority';

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
                tertiary: 'border-none hover:bg-tertiary-hover text-primary',
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
                variant: 'contained',
                color: 'tertiary',
                className: 'text-green-800',
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
