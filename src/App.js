import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header">
        <div className="mdl-layout-icon"></div>
            <div className="mdl-layout__header-row">
              <span className="mdl-layout__title">
                <h1>Bloc Jams</h1>
              </span>
	          </div>
            <div className="mdl-layout-spacer"></div>
          <nav>
            <Link to='/'> <h5>Landing</h5> </Link> 
            <Link to='/library'> <h5>Library</h5> </Link>
          </nav> 
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
      </div>
    );
  }
}

export default App;
