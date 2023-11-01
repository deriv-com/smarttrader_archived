import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabContainer, TabContent, TabList, TabPane } from 'Components/ui/tabs';

const meta = {
    title: 'Tabs',
    component: TabContainer,
    render: ({ ...args }) => (
        <TabContainer {...args}>
            <TabList>
                <Tab>Home</Tab>
                <Tab>Profile</Tab>
                <Tab>Contact</Tab>
            </TabList>
            <TabContent className='p-1.5'>
                <TabPane>Home Tab</TabPane>
                <TabPane>Profile Tab</TabPane>
                <TabPane>Contact Tab</TabPane>
            </TabContent>
        </TabContainer>
    ),
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['basic', 'underlined'],
            control: 'select',
        },
        indicatorColor: {
            options: ['primary'],
            control: 'select',
        },
        size: {
            options: ['lg', 'sm'],
            control: 'select',
        },
    },
} satisfies Meta<typeof TabContainer>;

export default meta;
type TTabsStory = StoryObj<typeof meta>;

export const Primary: TTabsStory = {
    args: {
        id: 'example-tab',
        variant: 'underlined',
        indicatorColor: 'primary',
        size: 'lg',
    },
};
