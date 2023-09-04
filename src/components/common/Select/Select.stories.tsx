import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [localValue, setValue] = useState<string>(args.value ? `${args.value}` : "");
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }
  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" }
  ];
  return <Select {...args} value={localValue} onChange={onChangeSelect} options={options} />
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Choose option"
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Choose option",
  error: "Error message"
};

export const Success = Template.bind({});
Success.args = {
  placeholder: "Choose option",
  success: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Choose option",
  disabled: true,
};

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  placeholder: "Choose option",
  viewOnly: true,
  value: "View only"
};
