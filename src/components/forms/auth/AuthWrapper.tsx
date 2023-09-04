import React, { ReactNode } from "react";
import classNames from "classnames";

type Props = {
  form: ReactNode,
  children: ReactNode,
  className?: string
}

export const AuthWrapper: React.FC<Props> = (props) => {
  const { form, children, className } = props;

  return <div className={classNames(
    "flex flex-col pt-8 px-8 md:px-16 pb-16 bg-slate-100 gap-y-16 rounded-2xl",
    className
  )}>
    <header>
      {children}
    </header>
    <div>
      {form}
    </div>
  </div>
};
