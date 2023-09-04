import React, { ChangeEvent, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as EmptyImg } from '../../../assets/illustrations/empty-96x96.svg';
import { ModalWrapper } from '.';

export default {
  title: 'Components/Modal',
  component: ModalWrapper,
} as ComponentMeta<typeof ModalWrapper>;

const Template: ComponentStory<typeof ModalWrapper> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <ModalWrapper {...args} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
};

export const Default = Template.bind({});
Default.args = {
    title: "Confirm new email",
    subtitle: "We’ve sent you a confirmation link to your new email. The email will be updated once you confirm the new email.",
    children: <EmptyImg />
};
