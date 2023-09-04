import React, { ReactNode } from "react";
import classNames from 'classnames';

type Props = {
  children?: ReactNode,
  className?: string
};

export const ListControl: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div className={classNames(
      "",
      className
    )}>
      {children}
    </div>
  );
};
