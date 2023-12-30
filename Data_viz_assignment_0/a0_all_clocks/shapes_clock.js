// setup() is called once at page-load
function setup() {
  createCanvas(500, 400); // make an HTML canvas element width x height pixels
  hrColor = color(255, 16, 3);
  minColor = color(255, 118, 2);
  secColor = color(255, 224, 3);
  innerColor = color(220, 140, 255);
  spacing = 160; // spacing between shapes
  sizeOfShapes = 75 // size of shapes
}

// draw() is called 60 times per second
function draw() {
  background(255, 241, 225);
  drawShapesAccordingToTime();
}

// function for drawing time grids 
function drawShapesAccordingToTime() {
  drawShapes(hour(), sizeOfShapes, hrColor, width / 2 - spacing, height / 2); 
  drawShapes(minute(), sizeOfShapes, minColor, width / 2, height / 2); 
  drawShapes(second(), sizeOfShapes, secColor, width / 2 + spacing, height / 2); 
}

function drawShapes(sides, radius, col, x, y) {
  let angle = TWO_PI / sides;
  push();
  translate(x, y);
  fill(col);

  // Draw the shape based on time
  beginShape();
  for (let i = 0; i < sides; i++) {
    let px = cos(i * angle) * radius;
    let py = sin(i * angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);

  // Draw lines from each vertex to the center
  for (let i = 0; i < sides; i++) {
    let px = cos(i * angle) * radius;
    let py = sin(i * angle) * radius;
    line(0, 0, px, py);
  }

  // If sides is 0, draw a dot at the center
  if (sides === 0) {
      ellipse(0, 0, 2, 2);
  }

  pop();
}