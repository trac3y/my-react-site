import React, {Component} from 'react';
import './../styles/App.css';
import Canvas from './Canvas.js';
import About from './About.js';

class Home extends Component {

  render() {
    return(
      <div className="home">
        <Canvas flooded={this.flooded} />
        <About />
      </div>
    );
  }
}

module.exports = Home;
