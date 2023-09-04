import React, { ReactNode } from "react";
import classNames from "classnames";
import "./styles.css";

type Props = {
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  name?: string;
  disabled?: boolean;
  className?: string;
};

export const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    checked = false, onChange, children, name = "", disabled = false, className = ""
  } = props;
  return (
    <label className={classNames(
      "inline-flex items-start space-x-3 cursor-pointer",
      { "theme-text-secondary": disabled },
    )}
    >
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        ref={ref}
        disabled={disabled}
        className={classNames(
          "form-tick appearance-none bg-white bg-check h-8 w-8 border border-solid theme-border rounded cursor-pointer checked:border-transparent checked:bg-gray-500 flex-shrink-0",
          {
            "checked": checked,
          },
          className
        )}
      />
      <span className="font-normal text-gray-300">
        {children}
      </span>
    </label>
  );
});
