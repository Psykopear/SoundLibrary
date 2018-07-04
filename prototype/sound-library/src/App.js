import React from 'react';
import './App.css';


const SidebarButton = props => (
  <div className={`sidebarButton ${props.active ? 'active' : ''}`}>
    <i className={`fas ${props.icon}`} />
  </div>
);


const Sidebar = () => (
  <div className="sidebar">
    <SidebarButton icon="fa-search" active />
    <SidebarButton icon="fa-list" />
    <SidebarButton icon="fa-terminal" />
    <SidebarButton icon="fa-user" />
  </div>
);


const ListSound = props => (
  <div className="listSound">
    Sono un suono di lista {props.sound}
  </div>
);


const Results = () => (
  <div className="list">
    <ListSound sound="ajo" />
    <ListSound sound="ciao" />
    <ListSound sound="ahoj" />
  </div>
);

const SearchPage = () => (
  <div className="search page">
    <input className="textInput" type="text" placeholder="Search..."/>
    <Results />
  </div>
);


const DetailPage = () => (
  <div className="detail page">
    <p>Some details</p>
  </div>
);


const PageContainer = () => (
  <div className="pageContainer">
    <SearchPage />
    <DetailPage />
  </div>
);


const App = () => (
  <div className="container">
    <Sidebar />
    <PageContainer />
  </div>
);

export default App;
