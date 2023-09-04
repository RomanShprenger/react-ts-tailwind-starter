import React from "react";
import { Menu } from '../../components/common/Menu';
import { ROUTES } from '../../constants';
import { useLocation } from 'react-router-dom';

const MenuList = [
  {
    icon: "Home",
    name: "Dashboard",
    to: ROUTES.DASHBOARD
  },
]

export const DashboardMenu: React.FC = () => {
  const location = useLocation();

  return <Menu
    list={MenuList}
    active={location.pathname}
    inverse={true}
  />
};
