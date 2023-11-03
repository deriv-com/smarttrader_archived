import type { Meta, StoryObj } from '@storybook/react';

import Input from 'Components/ui/input';

const meta = {
    title: 'Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: {
                type: 'text',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type TInputStory = StoryObj<typeof meta>;

export const Primary: TInputStory = {
    args: {
        value: 'test',
        placeholder: 'placeholder',
    },
};
