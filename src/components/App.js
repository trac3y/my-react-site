import React, {Component} from 'react';
import './../styles/App.css';
import Header from './Header.js';
import Home from './Home.js';
import Work from './Work.js';
import Main from './Main.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flooded: false
    };
  }

  render() {
    return(
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
