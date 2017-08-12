var center, width, height;
var points = 10;
var pathHeight = 200;
var path = null;
var flooded = false;

initializePath();

function initializePath() {
  console.log("initializing path");
  path = new Path();

  center = view.center;
  width = view.size.width;
  height = view.size.height - 200;

  path.segments = [];
  path.add(view.bounds.topLeft);
  path.add(new Point(10, center.y));

  for (var i = 1; i < points; i++) {
    var point = new Point(width / points * i, center.y);
    path.add(point);
  }

  path.add(new Point(width, center.y));
  path.add(view.bounds.topRight);

  path.fullySelected = true;
  path.fillColor = '#ff6b61';
}

function onFrame(event) {
  // path.fillColor.hue += 1;

  if (flooded) {
    for (var i = 1; i < points + 2; i++) {
      path.segments[i].point.y += 10;
    }
  } else {
    for (var i = 1; i < points; i++) {
      var sinSeed = event.count + (i + i % 10) * 100;
      var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
      var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
      path.segments[i].point.y = yPos;
      timesCalled++;
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

onResize(event) {
  this.initializePath();
}
