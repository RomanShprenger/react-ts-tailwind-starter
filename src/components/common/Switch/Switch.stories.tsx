import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;


const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }
  return <Switch {...args} checked={checked} onChange={onCheck} />
};


export const Default = Template.bind({});
Default.args = {
  id: "switch",
  children: "Label"
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "switch-disabled",
  disabled: true,
};
