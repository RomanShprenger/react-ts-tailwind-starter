import React, { ReactNode } from "react";
import Modal from 'react-modal';
import classNames from "classnames";
import { Icon, Button } from "../../common";

type Props = {
  title: string,
  subtitle: string,
  children?: ReactNode,
  className?: string,
  isOpen: boolean,
  close: () => void
};

const customStyles = {
  content: {
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    paddingBottom: '10%',
    transform: 'translate(-50%, 0)',
    backgroundColor: 'transparent',
    padding: '0',
    border: 'none',
    zIndex: '100'
  },
  overlay: {
    backgroundColor: 'rgba(11, 14, 30, 0.7)',
    zIndex: '100',
    height: "100vh",
    width: "100vw",
    overflow: "auto"
  }
};

Modal.setAppElement('#root');

export const ModalWrapper: React.FC<Props> = (props) => {
  const {
    children,
    className,
    title,
    subtitle,
    isOpen,
    close,
  } = props;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Modal"
        className={classNames("", className)}
        bodyOpenClassName="overflow-hidden"
      >
        <div className="bg-white pt-12 px-16 pb-24 border border-gray-100 rounded-md w-[592px]">
          <h2 className="font-poppins text-gray-500 text-4xl font-bold mb-6">{title}</h2>
          <div className="theme-subheading text-sm">{subtitle}</div>

          <div className="mt-16">
            {children}
          </div>
        </div>
      </Modal>
      {
        isOpen && (
          <div className="fixed top-6 right-6 z-[110]">
            <Button
              onClick={close}
              className=""
              icon
            >
              <Icon icon="Close" size={24} className="text-gray-500" disableFill />
            </Button>
          </div>
        )
      }
    </>
  );
};
