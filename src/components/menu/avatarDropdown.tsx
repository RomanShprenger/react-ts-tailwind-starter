import React, { useState } from "react";
import { Avatar } from "../common/Avatar";
import { ROUTES } from '../../constants';
import { Popover } from 'react-tiny-popover'
import { NavLink } from "react-router-dom";
import Icon from '../common/Icon';
import { useLogoutMutation } from '../../store/services/auth';
import { useNavigate } from "react-router-dom";

type Props = {
  title: string
}

const Menu = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async (e: any) => {
    await logout(e);
    navigate(ROUTES.DASHBOARD);
  }

  return <div className="dropdown-menu w-52">
    <NavLink to={ROUTES.DASHBOARD} className="dropdown-menu-item">
      Settings
      <Icon icon="Settings" size={24} className="text-gray-500" disableFill />
    </NavLink>
    <button className="dropdown-menu-item" onClick={logoutHandler}>
      Logout
      <Icon icon="Log-out" size={24} className="text-gray-500" disableFill />
    </button>
  </div>
}

export const AvatarDropdown: React.FC<Props> = (props) => {
  const { title } = props;
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return <div className="relative" data-cy="user-avatar-drop-down">
    <Popover
      isOpen={dropdownVisible}
      positions={["right", "bottom"]}
      content={<Menu />}
      padding={10}
      align="end"
      onClickOutside={() => setDropdownVisible(false)}
    >
      <div>
        <Avatar
          title={title}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        />
      </div>
    </Popover>
  </div>
}
