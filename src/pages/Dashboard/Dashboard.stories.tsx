import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dashboard } from './Dashboard';

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = () => <Dashboard />;

export const Page = Template.bind({});
