import React, {Component} from 'react';
import paper from 'paper';
import './../styles/App.css';


class Canvas extends Component {
  componentDidMount() {
    paper.install(window);
    var Path = paper.Path,
    Point = paper.Point,
    view = paper.View;


    var myCanvas = document.getElementById("myCanvas");
    paper.setup(myCanvas);

    var center, width, height, pathHeight;
    var points = 10; // number of points in path
    var path = new Path();

    initializePath();

    function initializePath() {
      console.log("initializing path");
      // center = view.center/2;
      center = view.center;
      width = view.size.width;
      // height = view.size.height - 200;
      height = view.size.height - 800;
      path.segments = [];
      path.add(view.bounds.topLeft);
      path.add(new Point(10, center.y));

      for (var i = 1; i < points; i++) {
        var point = new Point(width / points * i, center.y);
        path.add(point);
        // console.log(point);
      }

      path.add(new Point(width, center.y));
      path.add(view.bounds.topRight);
      pathHeight = 200;
      path.fillColor = '#ff6b61';
    }

    function onFrame(event) {
      // path.fillColor.hue += 1;

      if (this.props.flooded) {
        for (var i = 1; i < points + 2; i++) {
          path.segments[i].point.y += 10;
        }
      } else {
        for (var i = 1; i < points; i++) {
          var sinSeed = event.count + (i + i % 10) * 100;
          var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
          var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
          path.segments[i].point.y = yPos;
        }

        path.smooth({type: 'continuous'});
      }
    }

    // // to remove - will be changing flooded variable based on clicking or scrolling
    // // will be set in main.js
    // function onMouseDown(event) {
    //   // Flood color down to entire viewport
    //   globals.flooded = true;
    // }

    function onResize(event) {
      initializePath();
    }
  }

  render() {
    return (
      <canvas id="myCanvas" data-paper-resize />
      // <canvas id="myCanvas" resize="true">Your browser does not support the HTML5 canvas tag.</canvas>
    );
  }
}

module.exports = Canvas;
