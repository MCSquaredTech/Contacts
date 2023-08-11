import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as faIcons from 'react-icons/fa'; 
import * as bsIcons from 'react-icons/bs';
import * as riIcons from 'react-icons/ri';
import * as aiIcons from 'react-icons/ai';
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
  SubMenu
} from 'react-pro-sidebar';

// https://codesandbox.io/s/react-sidebar-routing-boj4c?file=/src/components/Sidebar.js

import '../pages/Layout.css'

const LeftSidebar = () => {
  const [ collapsed, setCollapsed ] = useState(false); 
  const [ toggled, setToggled ] = useState(false);

  const handleCollapsed = () => { 
    setCollapsed(!collapsed);
  }

  const handleToggled = () => { 
    setToggled(!toggled);
  }

  return (
    <Sidebar 
      className='sidebar'
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggled}
      breakPoint="md" >    
      <Menu>
        {/* ProSidebar Header */}
        <h5 style={{textAlign: "center"}}><bsIcons.BsPeopleFill /> Contact List</h5>
        <MenuItem
          icon={<aiIcons.AiFillDashboard size={"20px"}/>}
          component={<Link to="/"  />}
          >Dashboard</MenuItem>
        <MenuItem
          icon={<bsIcons.BsBuildingFill size={"20px"}/>}
          component={<Link to="/"  />}
          >Company</MenuItem>
        <MenuItem
          icon={<riIcons.RiContactsFill size={"20px"}/>}
          component={<Link to="/contacts" />} 
          >Contacts</MenuItem>
        <MenuItem
          icon={<faIcons.FaRegIdBadge size={"20px"}/>}
          component={<Link to="/people" />} 
          >Card View</MenuItem>
      </Menu>
      
    </Sidebar>
  )
}

export default LeftSidebar;
