import React from 'react';
import classNames from "classnames";

type Props = {
  children: string,
  className?: string
}

const Tale = () => (<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.92308 9.3942V0H15V9.3942C15 19.1201 5 20.4461 0 19.8934C2.30769 19.8935 6.92308 17.7937 6.92308 9.3942Z" fill="#434992"/>
</svg>)


export const Bubble: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={classNames(
      "py-2 px-6 bg-blue-500 rounded-full inline-block text-white text-base font-manrope font-semibold relative",
      className
    )}>
      <span className="absolute -left-[7px] bottom-0">
        <Tale />
      </span>
      {children}
    </div>
  )
}
