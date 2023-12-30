function setup() {
  createCanvas(400, 400);
  hrColor = color(255, 184, 184);   // Light Coral
  minColor = color(184, 228, 255);  // Light Sky Blue
  secColor = color(240, 180, 220);  // Light Pink
  innerColor = color(255, 236, 179); // Light Yellow
}

let targetAngles = {
  hr: 0,
  min: 0,
  sec: 0
};

let currentAngles = {
  hr: 0,
  min: 0,
  sec: 0
};

// draw() is called 60 times per second
function draw() {

  let hr = hour();
  let min = minute();
  let sec = second();

  if (hr >= 5 && hr < 7) {
  let dawnColorBottom = color(150, 200, 255);
  let dawnColorTop = color(255, 200, 150);
  for (let y = 0; y < height; y++) {
    let gradientColor = lerpColor(dawnColorBottom, dawnColorTop, y / height);
    stroke(gradientColor);
    line(0, y, width, y);
  }
    drawStars();
    drawSun();
}

  else if (hr >= 7 && hr < 15) {
  let eveningColorBottom = color(255, 240, 200);
  let eveningColorTop = color(200, 220, 255);
  for (let y = 0; y < height; y++) {
    let gradientColor = lerpColor(eveningColorBottom, eveningColorTop, y / height);
    stroke(gradientColor);
    line(0, y, width, y);
  }
    drawSun();
}

  else if (hr >= 15 && hr < 17) {
    let eveningColorBottom = color(255, 240, 200);
  let eveningColorTop = color(255, 200, 150);
  for (let y = 0; y < height; y++) {
    let gradientColor = lerpColor(eveningColorBottom, eveningColorTop, y / height);
    stroke(gradientColor);
    line(0, y, width, y);
  }
    drawSun();
}

  else if (hr >= 17 && hr < 19) {
  let eveningColorBottom = color(20, 20, 40);
  let eveningColorTop = color(210, 140, 200);
  for (let y = 0; y < height; y++) {
    let gradientColor = lerpColor(eveningColorBottom, eveningColorTop, y / height);
    stroke(gradientColor);
    line(0, y, width, y);
  }
    drawStars();
}
  else {
    background(20, 20, 40);
    drawStars();
  }

  let innerRadius = 25; // Increased border width
  let secRadius = 65;   // Increased border width
  let minRadius = 125;  // Increased border width
  let hrRadius = 185;   // Increased border width
 // background(235);

  currentAngles.hr = lerp(currentAngles.hr, map(hr % 12, 0, 12, -HALF_PI, TWO_PI - HALF_PI), 0.05);
  currentAngles.min = lerp(currentAngles.min, map(min, 0, 60, -HALF_PI, TWO_PI - HALF_PI), 0.05);
  currentAngles.sec = lerp(currentAngles.sec, map(sec, 0, 60, -HALF_PI, TWO_PI - HALF_PI), 0.05);

  // getting the x and y of hour intersection
  let x_hr = cos(currentAngles.hr) * (hrRadius - minRadius);
  let y_hr = sin(currentAngles.hr) * (hrRadius - minRadius);

  // getting the x and y of min intersection
  let x_min = x_hr + cos(currentAngles.min) * (minRadius - secRadius);
  let y_min = y_hr + sin(currentAngles.min) * (minRadius - secRadius);

  // getting the x and y of sec intersection
  let x_sec = x_min + cos(currentAngles.sec) * (secRadius - innerRadius);
  let y_sec = y_min + sin(currentAngles.sec) * (secRadius - innerRadius);

  // hour circle
  fill(hrColor);
  ellipse(width / 2, height / 2, hrRadius * 2, hrRadius * 2);

  // min circle
  fill(minColor);
  ellipse(width / 2 + x_hr, height / 2 + y_hr, minRadius * 2, minRadius * 2);

  // sec circle
  fill(secColor);
  ellipse(width / 2 + x_min, height / 2 + y_min, secRadius * 2, secRadius * 2);

  // inner circle for intersection
  fill(innerColor);
  ellipse(width / 2 + x_sec , height / 2 + y_sec, innerRadius * 2, innerRadius * 2);


}

function drawStars() {
  fill(255); // White color for stars
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 3, 3);
  }
}

function drawSun() {
  fill(255, 255, 0); // Yellow color for the sun
  ellipse(width / 2, height / 4, 80, 80);
}