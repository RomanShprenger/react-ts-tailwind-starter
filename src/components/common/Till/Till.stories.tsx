import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Till } from '.';

export default {
  title: 'Components/Till',
  component: Till
} as ComponentMeta<typeof Till>;

const Template: ComponentStory<typeof Till> = (args) => {
  return <Till {...args} />
};

export const Default = Template.bind({});
Default.args = {
  size: 56,
  icon: 'BTC'
};
