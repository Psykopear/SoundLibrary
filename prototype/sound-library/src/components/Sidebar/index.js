import React from 'react';

import SidebarButton from '../../components/SidebarButton';
import './styles.css';


const Sidebar = () => (
  <div className="sidebar">
    <SidebarButton icon="fa-search" active />
    <SidebarButton icon="fa-list" />
    <SidebarButton icon="fa-terminal" />
    <SidebarButton icon="fa-user" />
  </div>
);

export default Sidebar;
