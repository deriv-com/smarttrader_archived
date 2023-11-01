import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabContainer, TabList, Tab, TabContent, TabPane } from '..';

describe('Tab Component', () => {
    beforeEach(() => {
        render(
            <TabContainer id='test'>
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
        );
    });
    it('should render all tab component', async () => {
        const home_tab = screen.getByRole('tab', {
            name: 'Home',
        });
        const profile_tab = screen.getByRole('tab', {
            name: 'Profile',
        });
        const contact_tab = screen.getByRole('tab', {
            name: 'Contact',
        });

        expect(home_tab).toBeInTheDocument();
        expect(profile_tab).toBeInTheDocument();
        expect(contact_tab).toBeInTheDocument();
    });
    it('should set aria-selected to true for the first tab initially', () => {
        const firstTab = screen.getByRole('tab', { name: 'Home' });

        expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });

    it('should set aria-selected to false for the non-selected tabs', () => {
        const tabs = screen.getAllByRole('tab');
        const nonSelectedTabs = tabs.slice(1);

        nonSelectedTabs.forEach(tab => {
            expect(tab).toHaveAttribute('aria-selected', 'false');
        });
    });

    it('should only render the first tab panel initially', () => {
        const tabPanes = screen.getAllByRole('tabpanel');

        expect(tabPanes[0]).toHaveAttribute('aria-labelledby', 'test-0-tab');
        expect(tabPanes).lengthOf(1);
    });

    it('should change the active tab on click of non-selected tabs', async () => {
        const home_tab = screen.getByRole('tab', {
            name: 'Home',
        });
        const profile_tab = screen.getByRole('tab', {
            name: 'Profile',
        });

        await userEvent.click(profile_tab);

        const profileTabPane = screen.getByRole('tabpanel');

        expect(profile_tab).toHaveAttribute('aria-selected', 'true');
        expect(home_tab).toHaveAttribute('aria-selected', 'false');

        expect(profileTabPane).toHaveAttribute('aria-labelledby', 'test-1-tab');
    });
});
