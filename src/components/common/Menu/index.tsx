import React, { ElementType } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import Icon from '../Icon';

type MenuItemType = {
  icon: string,
  name: string,
  href?: string,
  to?: string,
  target?: string,
  component?: ElementType,
  active?: boolean,
  inverse?: boolean,
  onClick?: (args: any) => void
}

type Props = {
  list: MenuItemType[],
  className?: string,
  inverse?: boolean,
  active?: string
};

const ListItem: React.FC<MenuItemType> = (props) => {
  const { icon, name, href, to, target, component: Component = NavLink, active, inverse, onClick = () => {} } = props;

  return (
    <li 
    key={href}
    data-cy={name.toLowerCase()}
    >
      <Component
        to={to}
        href={href}
        target={target || "_self"}
        className={cn(
          "flex flex-row items-center justify-start gap-x-6 px-3 py-4 border rounded-lg font-manrope text-base",
          !active && "border-transparent",
          !inverse && active && "bg-purple-50 border-purple-100",
          inverse && active && "bg-white border-purple-100",
          active && "font-extrabold"
        )}
        onClick={onClick}
      >
        <Icon icon={icon} size={24} className="text-gray-500" disableFill />
        {name}
      </Component>
    </li>
  )
}

export const Menu: React.FC<Props> = (props) => {
  const { list, className, inverse = false, active } = props;

  return (
    <ul className={cn(
      "flex flex-col",
      className
    )} data-cy="menu">
      {
        list?.map((listItem: MenuItemType) => (
          <ListItem key={listItem.name} {...listItem} active={listItem.href === active || listItem.to === active} inverse={inverse} />
        ))
      }
    </ul>
  );
};
