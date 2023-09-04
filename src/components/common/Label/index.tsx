import React, { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  label?: ReactNode | string;
  children?: ReactNode;
  inline?: boolean;
  isFormField?: boolean;
  labelClassName?: string;
  valueClassName?: string;
  className?: string;
};

export const Label: React.FC<Props> = (props) => {
  const {
    label = "",
    labelClassName,
    valueClassName,
    inline,
    children,
    className
  } = props;
  return (
    <div className={classNames(
      {
        "mb-4 sm:flex sm:space-x-6 items-center": inline
      },
      className
    )}>
      <div className={classNames(
        "text-sm leading-1 flex-shrink-0 theme-text-secondary",
        labelClassName,
        {
          "sm:w-1/4 ": inline,
          "mb-2": label
        },
      )}
      >
        <span>{label}</span>
      </div>
      <div className={classNames(valueClassName, { "leading-1 flex-1": inline })}>{children}</div>
    </div>
  );
};
