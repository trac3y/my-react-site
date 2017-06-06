import React, {Component} from 'react';
import paper, {Path, Point, view} from 'paper';
import './../styles/App.css';

var height = 0;
var points = 10;
var pathHeight = 200;
var path = null;
var timesCalled = 0;

class Canvas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var myCanvas = document.getElementById("myCanvas");
    paper.setup(myCanvas);
    this.initializePath();
    // this.onResize();
    setInterval(this.onFrame, 75);
  }

  initializePath() {
    console.log("initializing path");

    var center, width;
    path = new Path();

    center = view.center;
    width = view.size.width;
    console.log('width: ' + width);

    height = view.size.height - 200;
    console.log('height: ' + height);

    path.segments = [];
    path.add(view.bounds.topLeft);
    path.add(new Point(10, center.y));

    for (var i = 1; i < points; i++) {
      var point = new Point(width / points * i, center.y);
      path.add(point);
      console.log('point '+ i + ': ' +point);
    }

    path.add(new Point(width, center.y));
    path.add(view.bounds.topRight);
    path.fillColor = '#ff6b61';

    console.log(path);
  }

  onFrame(event) {
    console.log('calling onFrame');
    console.log(timesCalled);
    // path.fillColor.hue += 1;

    // if (this.props.flooded) {
    //   for (var i = 1; i < points + 2; i++) {
    //     path.segments[i].point.y += 10;
    //   }
    // } else {
      for (var i = 1; i < points; i++) {
        // var sinSeed = event.count + (i + i % 10) * 100;
        var sinSeed = timesCalled + (i + i % 10) * 100;
        var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
        var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
        path.segments[i].point.y = yPos;
        timesCalled++;
      }

      path.smooth({type: 'continuous'});
    }
  // }

  // // to remove - will be changing flooded variable based on clicking or scrolling
  // // will be set in main.js
  // function onMouseDown(event) {
  //   // Flood color down to entire viewport
  //   globals.flooded = true;
  // }

  onResize(event) {
    this.initializePath();
  }

  render() {
    return (
      <canvas id="myCanvas" data-paper-resize>Your browser does not support the HTML5 canvas tag.</canvas>
    );
  }
}

module.exports = Canvas;
