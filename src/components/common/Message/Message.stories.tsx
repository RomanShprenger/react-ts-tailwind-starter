import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as EmptyImg } from '../../../assets/illustrations/empty-96x96.svg';
import { Button } from '../Button';
import Icon from "../Icon";

import { Message } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Error = Template.bind({});
Error.args = {
  heading: "Error headline",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  type: "error",
  img: EmptyImg,
  children: <Button>
    <span className="capitalize font-semibold text-base flex flex-row gap-x-3">
      Contact support   <Icon icon="Send" size={24} className="text-gray-500" disableFill />
    </span>
  </Button>
};

export const Success = Template.bind({});
Success.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  type: "success"
};


export const Warning = Template.bind({});
Warning.args = {
  heading: "Verify identity",
  text: "to complete the invoice",
  type: "warning",
  icon: "KYC"
};

export const Neutral = Template.bind({});
Neutral.args = {
  heading: "Neutral headline",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  type: "neutral",
  children: <Button>
    <span className="capitalize font-semibold text-base flex flex-row gap-x-3">
      Contact support   <Icon icon="Send" size={24} className="text-gray-500" disableFill />
    </span>
  </Button>
};
