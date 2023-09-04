import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example } from './Example';

export default {
  title: 'Pages/Example',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Page = Template.bind({});
