import { useEffect, useRef, useState } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from 'Utils/cn';

const tabListVariants = cva('', {
    variants: {
        variant: {
            basic: '',
            underlined: 'border-b border-b-general-section-1',
        },
        size: {
            lg: 'h-[3px] bottom-[-1.5px]',
            sm: 'h-[1px] bottom-[-0.5px]',
        },
        indicatorColor: {
            primary: 'bg-primary',
        },
    },
});

interface TabProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof tabListVariants> {
    activeIdx?: number;
}

export const TabList = ({ children, activeIdx = 0, variant, size, indicatorColor, className }: TabProps) => {
    const [width, setWidth] = useState(0);
    const [left, setLeft] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const buttons = [...ref.current.children].filter(child => child.nodeName === 'BUTTON' && child);
            const activeChild = buttons[activeIdx] as HTMLElement;
            setWidth(activeChild.clientWidth);
            setLeft(activeChild.offsetLeft);
        }
    }, [activeIdx]);

    return (
        <div
            className={cn('relative flex', className, tabListVariants({ variant }))}
            ref={ref}
            role='tablist'
            aria-orientation='horizontal'
        >
            {children}
            {variant === 'underlined' && (
                <div
                    className={cn(
                        tabListVariants({ size, indicatorColor }),
                        'absolute my-auto rounded ease-in-out [transition:left_0.4s,width_0.2s_0.1s]'
                    )}
                    style={{ width: `${width}px`, left: `${left}px` }}
                />
            )}
        </div>
    );
};

TabList.displayName = 'TabList';
