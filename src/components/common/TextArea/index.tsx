import React from "react";
import classNames from "classnames";

type Props = {
  placeholder?: string;
  name?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  resize?: false,
  disabled?: boolean;
  viewOnly?: boolean;
  className?: string;
  wrapperClassName?: string;
  rows?: number;
  [rest:string]: any
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props> ((props, ref) => {
  const {
    name = "",
    placeholder = "",
    error = "",
    onChange,
    onBlur = (): void => undefined,
    disabled = false,
    viewOnly = false,
    resize = false,
    className = "",
    wrapperClassName = "",
    rows = 4,
    ...rest
  } = props;
  return (
    <div className={wrapperClassName}>
      <textarea
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={classNames(
          "w-full font-manrope inline-flex px-6 py-4 text-base rounded-lg theme-placeholder-color border-gray-100 border appearance-none theme-text focus-visible:outline-none",
          {
            "theme-control-border": !error,
            "theme-border-error": !!error,
            "resize-none": !resize
          },
          className
        )}
        disabled={disabled || viewOnly}
        {...rest}
      />
      {
        error && <div id={`${name}-error`} className="theme-text-error text-base mt-1">{error}</div>
      }
    </div>
  );
});
