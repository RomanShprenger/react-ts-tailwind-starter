import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [localValue, setValue] = useState<string>(args.value ? `${args.value}` : "");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return <Input {...args} value={localValue} onChange={onChangeInput} />
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Text"
};

export const Postfix = Template.bind({});
Postfix.args = {
  placeholder: "Text",
  postfix: "$",
};

export const Note = Template.bind({});
Note.args = {
  placeholder: "Text",
  note: "Some information"
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Text",
  error: "Error message"
};

export const Success = Template.bind({});
Success.args = {
  placeholder: "Text",
  success: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Text",
  disabled: true,
};

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  placeholder: "Text",
  viewOnly: true,
  value: "View only"
};
