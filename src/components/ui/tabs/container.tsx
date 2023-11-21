import { Children, ComponentProps, FunctionComponent, ReactNode, cloneElement, isValidElement, useState } from 'react';
import { cn } from 'Utils/cn';

type TProps = ComponentProps<'div'> & {
    id: string;
    variant?: 'basic' | 'underlined';
    size?: 'lg' | 'sm';
    indicatorColor?: 'primary';
};

export const TabContainer = ({
    children,
    id,
    className,
    variant = 'underlined',
    indicatorColor = 'primary',
    size = 'lg',
}: TProps) => {
    const [value, setValue] = useState(0);

    const handleClick = (idx: number) => {
        setValue(idx);
    };

    const iterateOverChildren = (reactChildren: ReactNode, parent: 'TabList' | 'TabContent'): ReactNode => {
        return Children.map(reactChildren, (child, idx) => {
            if (!isValidElement(child)) return child;
            if (parent === 'TabList') {
                return cloneElement(child, {
                    ...child.props,
                    isActive: value === idx,
                    onClick: () => handleClick(idx),
                    id: `${id}-${idx}`,
                    variant,
                    size,
                });
            }
            if (parent === 'TabContent') {
                return cloneElement(child, {
                    ...child.props,
                    id: `${id}-${idx}`,
                });
            }
        });
    };

    const renderChildren = Children.map(children, child => {
        if (!isValidElement(child)) return null;
        const childType = child.type as FunctionComponent;
        const name = childType.displayName;
        if (name === 'TabList') {
            return cloneElement(child, {
                ...child.props,
                children: iterateOverChildren(child.props.children, name),
                activeIdx: value,
                variant,
                indicatorColor,
                size,
            });
        }
        if (name === 'TabContent') {
            return cloneElement(child, {
                ...child.props,
                children: iterateOverChildren(child.props.children, name),
                activeIdx: value,
            });
        }
    });

    return (
        <div className={cn('tab-container', className)} id={id}>
            {renderChildren}
        </div>
    );
};
