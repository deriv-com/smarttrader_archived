import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'Utils/cn';

const tabVariants = cva('', {
    variants: {
        variant: {
            basic: '',
            underlined: 'flex-auto',
        },
        size: {
            lg: 'text-[1.3225rem] px-5 py-1.5',
            sm: 'text-[0.813rem] px-2 py-[9px]',
        },
        isActive: {
            true: 'font-bold',
        },
    },
});

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tabVariants> {
    onClick?: () => void;
    isActive?: boolean;
}

export const Tab = ({ children, id, onClick, isActive, className, variant, size }: TabProps) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={cn(tabVariants({ variant, size, isActive }), className)}
            role='tab'
            id={`${id}-tab`}
            aria-selected={!!isActive}
            aria-controls={`${id}-panel`}
        >
            {children}
        </button>
    );
};

Tab.displayName = 'Tab';
