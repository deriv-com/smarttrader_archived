import { Meta, StoryObj } from '@storybook/react';
import Dialog from 'Components/ui/dialog';

const meta = {
    title: 'Dialog',
    component: Dialog,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type TDailogStory = StoryObj<typeof meta>;

export const Primary: TDailogStory = {
    args: {
        children: 'test',
        title: 'title',
        footer: 'footer',
        trigger: 'trigger',
    },
};
