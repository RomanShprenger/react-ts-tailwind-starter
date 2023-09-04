import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from '.';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
  const [localValue, setValue] = useState<string>("");
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return <Datepicker {...args} value={localValue} onChange={onChangeInput} />
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Choose date"
};
