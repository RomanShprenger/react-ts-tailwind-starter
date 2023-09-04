import React, { ReactNode, ElementType } from "react";
import classNames from "classnames";
import Icon from "../Icon";

type AreaProps = {
  type: "neutral" | "warning" | "success" | "error",
  children: ReactNode;
  className?: string
}

type Props = {
  img?: ElementType,
  icon?: string,
  heading?: string,
  text: string | ReactNode,
  children?: ReactNode;
  className?: string,
  areaClassName?: string,
  type: "neutral" | "warning" | "success" | "error",
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const MessageArea: React.FC<AreaProps> = (props) => {
  const { type, children, className } = props;

  return (
    <div className={classNames(
      "rounded-lg	border py-4 px-6",
      {
        "border-orange-300 bg-orange-50": type === 'error',
        "border-brown-300 bg-brown-100": type === 'warning',
        "border-green-300 bg-green-50": type === 'success',
        "border-slate-400 bg-slate-100": type === 'neutral',
      },
      className
    )}>
      {children}
    </div>
  )
}

export const Message: React.FC<Props> = (props) => {
  const {
    img: Image,
    icon,
    heading,
    text,
    type = "neutral",
    children,
    className,
    areaClassName,
    onClick
  } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <MessageArea type={type} className={areaClassName}>
        <div className="flex flex-row items-center gap-x-6">
          { Image && <Image className="" height={96} width={96} /> }
          <div className="flex flex-col gap-y-1 flex-1 shrink-1">
            { icon && <Icon icon={icon} size={32} className="text-gray-500 mb-2" disableFill /> }
            { heading && <div className="text-sm text-gray-500 font-manrope font-bold">{heading}</div> }
            { text && <div className="text-sm text-gray-500 font-manrope font-semibild">{text}</div> }
          </div>
        </div>
        {
          children && <footer className="mt-6">
            {children}
          </footer>
        }
      </MessageArea>
    </div>
  );
};
