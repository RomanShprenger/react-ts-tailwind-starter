import React from "react";
import Icon from "../Icon";
import { Input } from "../Input";
import classNames from "classnames";

type Props = {
  name?: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  autoComplete?: "on" | "off";
  note?: string;
  [rest:string]: any;
};

export const Datepicker = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete = "on",
    name = "",
    placeholder = "",
    error = "",
    maxLength,
    onChange,
    onBlur = (): void => undefined,
    disabled = false,
    className = "",
    note = "",
    ...rest
  } = props;
  return (
    <Input
      type="date"
      autoComplete={autoComplete}
      ref={ref}
      name={name}
      className={classNames("datepicker", className)}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      error={error}
      note={note}
      postfix={(
        <Icon icon="Calendar" size={24} className="text-gray-500" disableFill />
      )}
      {...rest}
    />
  );
});
