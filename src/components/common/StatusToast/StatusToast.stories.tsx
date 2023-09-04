import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusToast } from '.';

export default {
  title: 'Components/StatusToast',
  component: StatusToast
} as ComponentMeta<typeof StatusToast>;

const Template: ComponentStory<typeof StatusToast> = (args) => {
  return <StatusToast size={32} {...args} />
};

export const Connection = Template.bind({});
Connection.args = {
  type: "connection"
};

export const Error = Template.bind({});
Error.args = {
  type: "error"
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning"
};

export const Success = Template.bind({});
Success.args = {
  type: "success"
};

export const Info = Template.bind({});
Info.args = {
  type: "info"
};
