import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const MenuList = [
  {
    icon: "Home",
    name: "General",
    href: "/home",
    component: (props: any) => <a {...props} />
  },
  {
    icon: "Mail",
    name: "Email and phone",
    href: "/email",
    component: (props: any) => <a {...props} />
  },
  {
    icon: "Lock",
    name: "Security",
    href: "/security",
    component: (props: any) => <a {...props} />
  }
]

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: MenuList,
  className: "",
  inverse: false,
  active: "/home"
};

export const Inverse = Template.bind({});
Inverse.args = {
  list: MenuList,
  className: "",
  inverse: true,
  active: "/home",
};
