import React from 'react';
import Sidebar from './components/Sidebar';
import SearchPage from './pages/SearchPage';
import PlusPage from './pages/PlusPage';
import ListPage from './pages/ListPage';
import sounds from './data';
import './App.css';


const Page = ({ children }) => (
  <div className="pageContainer">
    {children}
  </div>
);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 1;
    this.state = {
      page: 'search',
      library: sounds.map(s => s.name),
      search: {
        pages: [1],
        active: 1,
      },
    };
  }

  addPage = () => {
    const searchState = this.state.search;
    this.counter = this.counter + 1;
    const newId = this.counter;
    this.setState({
      ...this.state,
      search: {
        ...searchState,
        active: newId,
        pages: [...searchState.pages, newId],
      },
    });
  }

  deletePage = (id) => {
    const searchState = this.state.search;
    this.setState({
      ...this.state,
      search: {
        ...searchState,
        pages: searchState.pages.filter(i => i !== id),
      },
    });
  }

  setActive = (id) => {
    this.setState({
      search: {
        ...this.state.search,
        active: id,
      },
    });
  }

  onPlay = (playing) => {
    if (playing === this.state.search.playing) {
      this.setState({
        ...this.state,
        search: {
          ...this.state.search,
          playing: '',
        },
      });
    } else {
      this.setState({
        ...this.state,
        search: {
          ...this.state.search,
          playing,
        },
      });
    }
  }

  addToLibrary = sound => {
    this.setState({
      ...this.state,
      library: [...this.state.library, sound],
    });
  }

  removeFromLibrary = sound => {
    this.setState({
      ...this.state,
      library: this.state.library.filter(s => s !== sound),
    });
  }

  render() {
    return (
      <div className="container">
        <Sidebar onClick={page => this.setState({ page })} page={this.state.page} />
        {
          this.state.page === 'search' && (
            <Page>
              { this.state.search.pages.map(id => (
                <SearchPage
                  key={id}
                  onClick={() => this.setActive(id)}
                  onPlay={this.onPlay}
                  playing={this.state.search.playing}
                  onDelete={() => this.deletePage(id)}
                  active={this.state.search.active === id}
                  library={this.state.library}
                  removeFromLibrary={this.removeFromLibrary}
                  addToLibrary={this.addToLibrary}
                />
              ))}
              <PlusPage onClick={this.addPage} />
            </Page>
          )}
      { this.state.page === 'list' && (
        <Page>
          <ListPage
            library={this.state.library}
            onPlay={this.onPlay}
            playing={this.state.search.playing}
            removeFromLibrary={this.removeFromLibrary}
          />
        </Page>
      )}
      </div>
    );
  }
};

export default App;
