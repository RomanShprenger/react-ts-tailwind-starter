import React from "react";
import classNames from "classnames";
import Icon from "../Icon";

export interface OptionType {
  value: string | number | null;
  label: string;
}

type Props = {
  value?: string;
  name?: string;
  placeholder?: string;
  error?: string;
  note?: string;
  success?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  viewOnly?: boolean;
  className?: string;
  autoComplete?: "on" | "off";
  options: OptionType[];
};

export const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    autoComplete = "on",
    value = "",
    name = "",
    placeholder = "",
    error = "",
    note = "",
    success = false,
    className = "",
    onChange,
    onBlur = (): void => undefined,
    disabled = false,
    viewOnly = false,
    options = []
  } = props;
  return (
    <div>
      <div className="relative">
        <select
          autoComplete={autoComplete}
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={classNames(
            className,
            "select-base",
            {
              "border-gray-100 hover:border-gray-200 active:border-gray-500 focus-visible:border-gray-500": !error && !success,
              "border-orange-500": !!error,
              "border-green-500": success,
              "bg-gray-50": disabled,
              "bg-slate-100": viewOnly,
              "text-gray-200": !value
            },
          )}
          disabled={disabled || viewOnly}
        >
          { placeholder && <option value="" selected>{placeholder}</option> }
          {
            options.map((option) => (
              <option value={option.value ?? ""} key={option.value}>
                {option.label}
              </option>
            ))
          }
        </select>
        <span className="select-chevron">
          <Icon icon="Chevron-down" size={24} className="text-gray-500" disableFill />
        </span>
      </div>
      {
        error && <div id={`${name}-error`} className="theme-text-error absolute text-sm mt-1">{error}</div>
      }
      {
        !error && note && <div className="theme-subheading text-sm absolute text-sm mt-2">{note}</div>
      }
    </div>
  );
});
