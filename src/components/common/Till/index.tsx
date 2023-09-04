import React from "react";
import Icon from "../Icon";
import classNames from "classnames";

type Props = {
  size?: number,
  icon: string,
  className?: string
};

export const Till: React.FC<Props> = (props) => {
  const { size = 56, icon, className } = props;
  const iconSize = (size - 2)/2.25;
  return (
    <div
      className={classNames("flex flex-row items-center justify-center border border-slate-600 bg-slate-100 rounded-lg", className)}
      style={{
        height: size,
        width: size
      }}>
      <Icon icon={icon} size={iconSize} className="text-gray-500" disableFill />
    </div>
  );
};
