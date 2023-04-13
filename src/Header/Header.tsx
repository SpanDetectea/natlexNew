import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss'
import { weatherApi } from '../api/api';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { setForecastDays } from '../store/contentReducer';
import { useTypedDispatch } from '../Hooks/useTypedDispatch';

const items: MenuProps['items'] = [
  {
    label: <NavLink to='/view'>Charts</NavLink>,
    key: '/view',
    icon: <BarChartOutlined />,
  },
  {
    label: <NavLink to='/settings'>Settings</NavLink>,
    key: '/settings',
    icon: <SettingOutlined />,
  },
];

function Header() {
  const dispatch = useTypedDispatch()
  const location = useLocation()
  useEffect(() => {
    const fetchData = async () => {
      const response = await weatherApi.getWeatherData()
      dispatch(setForecastDays(response))
    }
    fetchData()
  }, [])
  const [current, setCurrent] = useState(location.pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='header'/>
}

export default Header;