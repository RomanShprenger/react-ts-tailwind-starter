import React, { ReactNode, ElementType } from "react";
import classNames from "classnames";
import { Spinner } from "../Spinner";

// eslint-disable-next-line
enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  CRITICAL = "critical",
  TEMPTING = "tempting",
  DISABLED = "disabled",
}

type Props = {
  variant?: Variant;
  component?: ElementType,
  icon?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  name?: string;
  block?: boolean;
  loading?: boolean;
  className?: string;
  contentClassName?: string,
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string,
  href?: string,
  [args: string]: any
};


const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: `bg-gray-500 text-white border-gray-500
  hover:bg-gray-400 hover:border-gray-400
  active:bg-gray-600 active:border-gray-600`,
  [Variant.SECONDARY]: `bg-white theme-text-default theme-border
  hover:bg-gray-50
  active:bg-gray-100 active:border-gray-200`,
  [Variant.TERTIARY]: `bg-transparent theme-text-default border-transparent
  hover:bg-gray-50 active:bg-gray-500 active:text-white`,
  [Variant.CRITICAL]: `bg-orange-500 text-white border-orange-500
  hover:bg-orange-400 hover:border-orange-400
  active:bg-orange-600 active:border-orange-600`,
  [Variant.TEMPTING]: `bg-green-500 text-white border-green-500
  hover:bg-green-400 hover:border-green-400
  active:bg-green-600 active:border-green-600`,
  [Variant.DISABLED]: "bg-gray-50 text-gray-200 border-gray-100",
};

const LOADING_LIGHT_SPINNER_MAP: Record<Variant, boolean> = {
  [Variant.PRIMARY]: true,
  [Variant.SECONDARY]: false,
  [Variant.TERTIARY]: false,
  [Variant.CRITICAL]: true,
  [Variant.TEMPTING]: true,
  [Variant.DISABLED]: false,
};

export const Button: React.FC<Props> & { variant: typeof Variant; } = (props) => {
  const {
    children,
    variant = Variant.SECONDARY,
    disabled = false,
    type = "button",
    name = "",
    icon = false,
    block = false,
    loading = false,
    rounded = false,
    className = "",
    contentClassName = "",
    onClick,
    onMouseEnter,
    onMouseLeave,
    component: Component = 'button',
    ...args
  } = props;
  return (
    <Component
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(
        "relative inline-flex items-center justify-center font-manrope font-semibold whitespace-no-wrap border border-solid",
        className,
        VARIANT_MAPS[disabled ? Variant.DISABLED : variant],
        icon ? "w-14 h-14 text-base rounded-full" : "p-4 h-14 text-base rounded-lg",
        {
          "!rounded-full px-8": rounded,
          "cursor-default": disabled,
          "w-full": block,
        },
      )}
      disabled={disabled}
      name={name}
      // eslint-disable-next-line
      type={type}
      {...args}
    >
      { loading && <div className="inset-0 absolute flex items-center justify-between text-center">
        <Spinner light={LOADING_LIGHT_SPINNER_MAP[variant]} />
      </div>}
      <div className={classNames({ "opacity-0": loading }, contentClassName)}>
        {children}
      </div>
    </Component>
  );
};

Button.variant = Variant;
