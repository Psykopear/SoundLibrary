import React from 'react';

import SidebarButton from '../../components/SidebarButton';
import './styles.css';


const Sidebar = props => (
  <div className="sidebar">
    <SidebarButton onClick={() => props.onClick("search")}active={props.page === "search"} page="search" icon="fa-search" />
    <SidebarButton onClick={() => props.onClick("list")}active={props.page === "list"} page="list" icon="fa-list" />
    <SidebarButton onClick={() => props.onClick("foxdot")}active={props.page === "foxdot"} page="foxdot" icon="fa-terminal" />
    <SidebarButton onClick={() => props.onClick("user")}active={props.page === "user"} page="user" icon="fa-user" />
  </div>
);

export default Sidebar;
