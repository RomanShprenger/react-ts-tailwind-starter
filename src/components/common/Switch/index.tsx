import React, { ReactNode } from "react";
import cn from "classnames";

type Props = {
  id: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Switch = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    checked = false, id, onChange, children, disabled, className
  } = props;
  return (
    <label className={cn(
      "switch inline-flex items-center gap-x-3 text-sm cursor-pointer justify-between",
      className
    )}>
      <div className="relative inline-block w-14 align-middle select-none">
        <input
          type="checkbox"
          checked={checked}
          id={id}
          ref={ref}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            "top-0.5 duration-200 ease-in absolute block w-7 h-7 rounded-full appearance-none cursor-pointer",
            {
              "bg-white": !disabled,
              "left-0.5": !checked,
              "right-0.5": checked,
              "bg-gray-50": disabled,
              checked,
            },
          )}
        />
        <label
          htmlFor={id}
          className={cn("block overflow-hidden h-8 rounded-full cursor-pointer", {
            "bg-gray-500": checked,
            "bg-gray-100 hover:bg-gray-200": !checked && !disabled,
            "bg-gray-100": disabled,
          })}
        />
      </div>
      <span className="theme-text font-normal">
        {children}
      </span>
    </label>
  );
});
