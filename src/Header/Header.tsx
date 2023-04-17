import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { BarChartOutlined, SettingOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/view">Charts</NavLink>,
    key: "/view",
    icon: <BarChartOutlined />,
  },
  {
    label: <NavLink to="/settings">Settings</NavLink>,
    key: "/settings",
    icon: <SettingOutlined />,
  },
];

function Header() {
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="header"
    />
  );
}

export default Header;
