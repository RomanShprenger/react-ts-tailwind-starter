import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as EyeIcon } from "./eye.svg";
import { Input } from "../Input";

type Props = {
  value?: string;
  name?: string;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  autoComplete?: "on" | "off" | "current-password" | "new-password";
  autoFocus?: boolean
};

export const Password = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [inputType, setInputType] = useState<"password" | "text">("password");
  function togglePassword() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }
  const {
    autoComplete = "on",
    value = "",
    name = "",
    placeholder = "",
    error = "",
    maxLength,
    onChange,
    onBlur = (): void => undefined,
    disabled = false,
    autoFocus = false
  } = props;
  return (
    <div>
      <Input
        type={inputType}
        autoComplete={autoComplete}
        ref={ref}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        error={error}
        autoFocus={autoFocus}
        postfix={(
          <button className={cn("flex items-center z-10", { "opacity-50": inputType === "text" })} type="button" data-cy="show-hide-password-btn" onClick={togglePassword}>
            <EyeIcon />
          </button>
        )}
      />
    </div>
  );
});
