import React, {Component} from 'react';
import './../styles/App.css';

class Canvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <canvas id="myCanvas" data-paper-resize>Your browser does not support the HTML5 canvas tag.</canvas>
    );
  }
}

module.exports = Canvas;
