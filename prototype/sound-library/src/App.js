import React from 'react';
import Sidebar from './components/Sidebar';
import SearchPage from './pages/SearchPage';
import PlusPage from './pages/PlusPage';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className="pageContainer">
          <SearchPage onClick={() => this.setState({ active: 1 })} active={this.state.active === 1} />
          <SearchPage onClick={() => this.setState({ active: 2 })} active={this.state.active === 2} />
          <SearchPage onClick={() => this.setState({ active: 3 })} active={this.state.active === 3} />
          <SearchPage onClick={() => this.setState({ active: 4 })} active={this.state.active === 4} />
            <PlusPage onClick={() => this.setState({ active: 5 })} active={this.state.active === 5} />
        </div>
      </div>
    );
  }
};

export default App;
