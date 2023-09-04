import React, { ReactNode } from "react";
import classNames from "classnames";

type InputType = "email" | "text" | "password" | "number" | "date";

type Props = {
  prefix?: ReactNode;
  postfix?: ReactNode;
  type: InputType,
  name?: string;
  placeholder?: string;
  note?: string;
  error?: string;
  success?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  viewOnly?: boolean;
  className?: string;
  wrapperClassName?: string;
  maxLength?: number;
  autoComplete?: "on" | "off" | "current-password" | "new-password";
  [restProps:string]: any
};

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    prefix = "",
    postfix = "",
    autoComplete = "on",
    type,
    name = "",
    placeholder = "",
    note = "",
    error = "",
    success = false,
    className = "",
    wrapperClassName = "",
    maxLength,
    onChange = (): void => undefined,
    onBlur = (): void => undefined,
    disabled = false,
    viewOnly = false,
    ...restProps
  } = props;
  return (
    <div className={wrapperClassName}>
      <div className="relative">
        <input
          autoComplete={autoComplete}
          ref={ref}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          className={classNames(
            "w-full inline-flex border-solid border theme-placeholder-color theme-text-default px-6 py-4 rounded-lg appearance-none leading-none h-14 focus-visible:outline-none",
            {
              "border-gray-100 hover:border-gray-200 active:border-gray-500 focus-visible:border-gray-500": !error && !success,
              "border-orange-500": !!error,
              "border-green-500": success,
              "bg-gray-50": disabled,
              "bg-slate-100": viewOnly,
              "pr-10": !!postfix,
              "pl-10": !!prefix,
            },
            className
          )}
          disabled={disabled || viewOnly}
          {...restProps}
        />
        {
          !!postfix && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pl-1 w-10 flex items-center">{postfix}</span>
          )
        }
        {
          !!prefix && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-6 w-10 flex items-center text-gray-200">{prefix}</span>
          )
        }
        {
          error && <div id={`${name}-error`} className="theme-text-error absolute text-sm mt-1">{error}</div>
        }
        {
          !error && note && <div className="theme-subheading text-sm absolute text-sm mt-2 w-full flex">{note}</div>
        }
      </div>
    </div>
  );
});
