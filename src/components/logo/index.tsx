import React from "react";
import classNames from "classnames";
import LogoImg from '../../assets/logo/logo.svg';
import LogoImgVertical from '../../assets/logo/logo-vertical.svg';
import { ROUTES } from '../../constants';
import { NavLink } from "react-router-dom";

type Props = {
  align?: string,
  width?: string,
  className?: string
}

export const Logo: React.FC<Props> = (props) => {
  const { align = 'horizontal', width = 'auto', className } = props;
  if (align === 'horizontal') {
    return <NavLink
      to={ROUTES.DASHBOARD}
      className={classNames(
        "flex flex-row items-center justify-center",
        className
      )}
      style={{ width }}
    >
      <img src={LogoImg} className="w-full" alt="logo" />
    </NavLink>
  }

  return <NavLink
    to={ROUTES.DASHBOARD}
    className={classNames(
      "flex flex-row items-center justify-center",
      className
    )}
    style={{ width }}
  >
    <img src={LogoImgVertical} className="w-full" alt="logo-vertical" />
  </NavLink>
};
