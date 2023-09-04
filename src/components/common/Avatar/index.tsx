import React from "react";
import cn from "classnames";

type Props = {
  title?: string,
  className?: string,
  type?: "user" | "business",
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
};

export const Avatar: React.FC<Props> = (props) => {
  const {
    title,
    className,
    type = "user",
    onClick,
    onBlur = (): void => undefined,
  } = props;

  const letter = title?.charAt(0).toUpperCase();

  return (
    <div className={cn(
        "avatar-base",
        className,
        {
          "bg-purple-50 border-purple-500 text-purple-500": type === "user",
          "bg-green-50 border-green-500 text-green-500": type === "business",
          "cursor-pointer": onClick
        }
      )}
      onClick={onClick}
      onBlur={onBlur}
    >
      {letter}
    </div>
  );
};
