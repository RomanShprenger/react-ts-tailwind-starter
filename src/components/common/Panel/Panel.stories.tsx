import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Panel } from '.';
import { Input } from '../index';

export default {
  title: 'Components/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>Conent</div>
};

export const Warning = Template.bind({});
Warning.args = {
  children: <div>Conent</div>,
  warning: true,
};

export const Onboarding = Template.bind({});
Onboarding.args = {
  children: <div>Conent</div>,
  onboarding: true,
};

