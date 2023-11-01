import { ComponentProps } from 'react';
import { cn } from 'Utils/cn';

type PaneProps = ComponentProps<'div'>;

export const TabPane = ({ children, className, id }: PaneProps) => {
    return (
        <div className={cn(className)} role='tabpanel' id={`${id}-panel`} aria-labelledby={`${id}-tab`}>
            {children}
        </div>
    );
};

TabPane.displayName = 'TabPane';
