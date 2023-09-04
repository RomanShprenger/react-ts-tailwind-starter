import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusOnboarding } from '.';

export default {
  title: 'Components/StatusOnboarding',
  component: StatusOnboarding
} as ComponentMeta<typeof StatusOnboarding>;

const Template: ComponentStory<typeof StatusOnboarding> = (args) => {
  return <StatusOnboarding size={32} {...args} />
};

export const DarkTodo = Template.bind({});
DarkTodo.args = {
  done: false,
  theme: 'dark'
};

export const DarkDone = Template.bind({});
DarkDone.args = {
  done: true,
  theme: 'dark'
};

export const WhiteTodo = Template.bind({});
WhiteTodo.args = {
  done: false,
  theme: 'white'
};

export const WhiteDone = Template.bind({});
WhiteDone.args = {
  done: true,
  theme: 'white'
};

export const WithChild = Template.bind({});
WithChild.args = {
  done: true,
  theme: 'white',
  children: 'Client'
};
