import { HTMLAttributes, PropsWithChildren } from 'react';
import { Provider, Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-tooltip';

type TTooltip = HTMLAttributes<HTMLButtonElement> & {
    content: string;
};

const Tooltip = ({ content, children, ...props }: PropsWithChildren<TTooltip>) => (
    <Provider>
        <Root>
            <Trigger {...props}>{children}</Trigger>
            <Portal>
                <Content className='rounded-[4px] bg-active p-2 text-xs text-prominent' sideOffset={5}>
                    {content}
                    <Arrow className='fill-active' />
                </Content>
            </Portal>
        </Root>
    </Provider>
);

export default Tooltip;
