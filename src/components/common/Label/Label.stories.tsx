import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '.';
import { Input } from '../index';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  children: <Input type="text" value="Alex" onChange={() => {}} />
};

export const Inline = Template.bind({});
Inline.args = {
  label: "Name",
  inline: true,
  children: <Input type="text" value="Alex" onChange={() => { }} />
};


