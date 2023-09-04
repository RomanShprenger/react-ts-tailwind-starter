import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../common';
import classNames from "classnames";

type Props = {
  className?: string
}

export const BackBtn: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  return <div className={classNames("my-8", className)}>
    <Button variant={Button.variant.TERTIARY} onClick={() => navigate(-1)}>
      <span className="flex flex-row gap-x-3 items-center justify-center font-manrope text-base">
        <Icon icon="Arrow-left" size={24} className="text-gray-500" disableFill />
        Back
      </span>
    </Button>
  </div>
};
