import React from 'react';
import Sidebar from './components/Sidebar';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import './App.css';


const App = () => (
  <div className="container">
    <Sidebar />
    <div className="pageContainer">
      <SearchPage />
      <DetailPage />
    </div>
  </div>
);

export default App;
