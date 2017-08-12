import React, {Component} from 'react';
import './../styles/App.css';
import Header from './Header.js';
import Canvas from './Canvas.js';
import About from './About.js';

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
        <About/>
      </div>
    );
  }
}

export default App;
