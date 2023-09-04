import React, { ReactNode } from "react";
import cn from "classnames";

type Props = {
  children?: ReactNode;
  className?: string;
  warning?: boolean;
  onboarding?: boolean;
};

export const Panel: React.FC<Props> = (props) => {
  const { children, className, warning, onboarding } = props;
  return (
    <div className={cn("border-solid border rounded-lg py-4 px-6", className, {
      "bg-white border-slate-600": !warning && !onboarding,
      "bg-brown-100 border-brown-300": warning,
      "bg-blue-500 border-blue-500": onboarding,
    })}>
      {children}
    </div>
  );
};
