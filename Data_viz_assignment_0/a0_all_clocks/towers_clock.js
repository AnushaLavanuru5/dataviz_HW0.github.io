// setup() is called once at page-load
function setup() {
    createCanvas(400, 300); // make an HTML canvas element width x height pixels
    hrColor = color(120, 30, 150);   
    minColor = color(150, 50, 200);  
    secColor = color(190, 90, 220);       
    innerColor = color(220, 140, 255); 
    subsquareSizeX = 20;
    subsquareSizeY = 20;
}

// draw() is called 60 times per second
function draw() {
  background(235);
  drawTimeTowerWithColoredSquares();
}

// function for drawing time grids 
function drawTimeTowerWithColoredSquares() {
  drawTowers(0, hour(), color(hrColor), 2, 12);
  drawTowers(1, minute(), color(minColor), 5, 12); 
  drawTowers(2, second(), color(secColor), 5, 12);
}

// function for drawing grids 
function drawTowers(gridIndex, currentUnit, fillColor, columns, rows) {
  let currentCount = currentUnit;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i * rows + j;
      let x = 25 + gridIndex * (columns + 1) * subsquareSizeX + i * subsquareSizeX;
      let y = 25 + j * subsquareSizeY;
      if (index < currentCount) {
        fill(fillColor); // filling color as part of time
      } else {
        noFill();
      }
      rect(x, y, subsquareSizeX, subsquareSizeY);
    }
  }
}
  

  