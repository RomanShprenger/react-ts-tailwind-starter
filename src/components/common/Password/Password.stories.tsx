import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Password } from '.';

export default {
  title: 'Components/Password',
  component: Password,
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args) => {
  const [localValue, setValue] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return <Password {...args} value={localValue} onChange={onChangeInput} />
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Password"
};

