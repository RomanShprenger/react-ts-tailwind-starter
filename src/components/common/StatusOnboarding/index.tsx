import React, { ReactNode, useMemo } from "react";
import classNames from "classnames";
import Icon from "../Icon";

type Props = {
  size?: number,
  done?: boolean,
  theme?: 'white' | 'dark',
  children?: ReactNode;
};

const statusBg = (theme: string, done: boolean) => {
  if (done) return "bg-green-500";
  if (theme === "dark") return "bg-blue-600";
  return "bg-slate-500"
};

const calcSizes = (size:number) => ({
  iconSize: size*0.75,
  wrapperSize: `${size}px`
})

export const StatusOnboarding: React.FC<Props> = (props) => {
  const {
    size = 32,
    done = false,
    theme = 'white',
    children
  } = props;

  const statusBgValue = useMemo(() => statusBg(theme, done), [theme, done]);
  const { iconSize, wrapperSize } = useMemo(() => calcSizes(size), [size]);

  return (
    <div className="flex flex-row gap-4 items-center">
      <span
        className={classNames(
          'p-1 rounded-full relative block',
          statusBgValue,
        )}
        style={{
          minHeight: wrapperSize,
          minWidth: wrapperSize
        }}
      >
        { done && <Icon icon="Checkmark" size={iconSize} className="text-white" disableFill /> }
      </span>
      {
        children && <span className="font-manrope text-base">{children}</span>
      }
    </div>
  );
};
