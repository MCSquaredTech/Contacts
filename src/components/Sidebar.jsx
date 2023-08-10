import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as faIcons from 'react-icons/fa'; 
import { 
  ProSidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarContent
} from 'react-pro-sidebar';

// https://codesandbox.io/s/react-sidebar-routing-boj4c?file=/src/components/Sidebar.js

import '../pages/Layout.css'

const Sidebar = () => {
  const [ collapsed, setCollapsed ] = useState(false); 
  const [ toggled, setToggled ] = useState(false);

  const handleCollapsed = () => { 
    setCollapsed(!collapsed);
  }

  const handleToggled = () => { 
    setToggled(!toggled);
  }

  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggled}
      breakPoint="md" >
      {/* ProSidebar Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem
            icon={<faIcons.FaAddressBook />}
            onClick={handleCollapsed}
            >Contact</MenuItem>
        </Menu>
      </SidebarHeader>
    </ProSidebar>
  )
}

export default Sidebar;
