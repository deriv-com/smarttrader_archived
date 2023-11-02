import { cloneElement, forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import { cn } from 'Utils/cn';

export interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    hint?: string;
    hintClassname?: string;
    label?: string;
    labelAlignment?: 'left' | 'right';
    labelClassname?: string;
    leadingIcon?: ReactElement;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    trailingIcon?: ReactElement;
    value: string;
}

type TLabelProps = {
    className?: string;
    id?: string;
    label: string;
};

const Label = ({ className, id, label }: TLabelProps) => (
    <label htmlFor={id} className={cn('whitespace-nowrap', className)}>
        {label}
    </label>
);

const Input = forwardRef<HTMLInputElement, TInputProps>(
    (
        {
            className,
            hintClassname = '',
            id,
            error = false,
            hint = '',
            label = '',
            labelAlignment = 'left',
            labelClassname = '',
            leadingIcon,
            trailingIcon,
            type,
            ...props
        },
        ref
    ) => {
        return (
            <div className='my-3 flex flex-col px-2'>
                <div className='flex w-full flex-row items-center gap-2'>
                    {labelAlignment === 'left' && <Label id={id} label={label} className={labelClassname} />}
                    <div className='relative flex w-full items-center'>
                        {leadingIcon &&
                            cloneElement(leadingIcon, {
                                className: cn(
                                    'absolute left-4 ',
                                    { 'opacity-50': props.disabled },
                                    leadingIcon.props.className
                                ),
                            })}
                        <input
                            type={type}
                            className={cn(
                                'my-1 w-full rounded-[5px] border px-2 py-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
                                { 'border-danger text-danger': error },
                                className
                            )}
                            ref={ref}
                            {...props}
                        />
                        {trailingIcon &&
                            cloneElement(trailingIcon, {
                                className: cn(
                                    'absolute right-4',
                                    { 'opacity-50': props.disabled },
                                    trailingIcon.props.className
                                ),
                            })}
                        {hint && (
                            <span
                                className={cn(
                                    'absolute bottom-[-1rem] text-[0.75rem]',
                                    { 'italic text-danger': error },
                                    hintClassname
                                )}
                            >
                                {hint}
                            </span>
                        )}
                    </div>
                    {labelAlignment === 'right' && <Label id={id} label={label} className={labelClassname} />}
                </div>
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
