import React, {Component} from 'react';
import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header.js';
import Canvas from './Canvas.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flooded: false
  };
}

  render() {
    return (
      <div className="App">
        <Header/>
        <Canvas flooded={this.flooded} />
      </div>
    );
  }
}

export default App;
