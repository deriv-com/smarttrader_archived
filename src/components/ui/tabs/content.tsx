import { Children, ComponentProps } from 'react';
import { cn } from 'Utils/cn';

type ContentProps = ComponentProps<'div'> & {
    activeIdx?: number;
};

export const TabContent = ({ children, className, activeIdx }: ContentProps) => {
    const childArr = Children.toArray(children);
    const activeChild = childArr.find((_el, i) => i === activeIdx);
    return <div className={cn(className)}>{activeChild}</div>;
};

TabContent.displayName = 'TabContent';
