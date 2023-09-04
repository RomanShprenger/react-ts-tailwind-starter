import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';
import Icon from '../Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: Button.variant.PRIMARY,
  children: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: Button.variant.SECONDARY,
  children: "Button"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: Button.variant.TERTIARY,
  children: "Button"
};

export const Critical = Template.bind({});
Critical.args = {
  variant: Button.variant.CRITICAL,
  children: "Button"
};

export const Tempting = Template.bind({});
Tempting.args = {
  variant: Button.variant.TEMPTING,
  children: "Button"
};

export const IconBtn = Template.bind({});
IconBtn.args = {
  variant: Button.variant.TEMPTING,
  children: "+",
  icon: true,
};

export const Nav = Template.bind({});
Nav.args = {
  variant: Button.variant.PRIMARY,
  children: "Button",
  rounded: true,
};
