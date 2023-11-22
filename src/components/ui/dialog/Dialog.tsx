import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Close, Content, Description, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';
import { Cross1Icon as CloseIcon } from '@radix-ui/react-icons';
import { cn } from 'Utils/cn';

const DialogTrigger = Trigger;
const DialogPortal = Portal;

const DialogOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
    ({ className, ...props }, ref) => (
        <Overlay
            ref={ref}
            className={cn(
                'bg-background/80 fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                className
            )}
            {...props}
        />
    )
);
DialogOverlay.displayName = Overlay.displayName;

const DialogContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
    ({ className, children, ...props }, ref) => (
        <DialogPortal>
            <DialogOverlay />
            <Content
                ref={ref}
                className={cn(
                    'bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full',
                    className
                )}
                {...props}
            >
                {children}
                <Close className='ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none'>
                    <CloseIcon className='h-4 w-4' />
                    <span className='sr-only'>Close</span>
                </Close>
            </Content>
        </DialogPortal>
    )
);
DialogContent.displayName = Content.displayName;

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
    ({ className, ...props }, ref) => (
        <Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
    )
);
DialogTitle.displayName = Title.displayName;

const DialogDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
    ({ className, ...props }, ref) => (
        <Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
    )
);
DialogDescription.displayName = Description.displayName;

type TDialogProps = {
    trigger: ReactNode;
    title?: string | ReactNode;
    footer?: ReactNode;
};
const Dialog = ({ trigger, title = '', children, footer = null, ...props }: PropsWithChildren<TDialogProps>) => {
    return (
        <Root>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    <DialogDescription {...props}>{children}</DialogDescription>
                </DialogHeader>
                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Root>
    );
};

export default Dialog;
