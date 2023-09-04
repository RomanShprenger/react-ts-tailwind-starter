import React, { useState, ReactNode } from "react";
import { Modal } from "../../../components/common";

type Props = {
    children: (fn: () => void) => ReactNode,
};

export const ChangePhoneModal: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        children
    } = props;

    const actionHandler = () => setIsOpen(true);

    return <>
        <>
            {children(actionHandler)}
        </>

        <Modal
            isOpen={isOpen}
            close={() => setIsOpen(false)}
            title="Change phone number"
            subtitle="Please enter the current phone number"
        >
            Some email form
        </Modal>
    </>
}