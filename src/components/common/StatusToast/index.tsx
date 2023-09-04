import React from "react";
import Icon from "../Icon";

type Props = {
  size?: number,
  type?: string
};

const statusIcon = (type: string) => {
  switch(type) {
    case 'connection':
      return { name: 'Light', color: 'text-gray-500' };
    case 'error':
      return { name: 'Close', color: 'text-orange-500' };
    case 'warning':
      return { name: 'Exclamation', color: 'text-brown-500' };
    case 'success':
      return { name: 'Checkmark', color: 'text-green-500' };
    default:
      return { name: 'Info', color: 'text-blue-500' };
  }
}

export const StatusToast: React.FC<Props> = (props) => {
  const {
    size = 32,
    type = 'info'
  } = props;

  const { name, color } = statusIcon(type);

  return (
    <Icon icon={name} size={size} className={color} disableFill />
  );
};
