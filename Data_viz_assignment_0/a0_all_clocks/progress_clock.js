// setup() is called once at page-load
function setup() {
    createCanvas(400, 400); // make an HTML canvas element width x height pixels  
    hrColor = color(255, 107, 129);   // Coral
    minColor = color(163, 102, 255);  // Lavender
    secColor = color(102, 255, 204);  // Mint
    innerColor = color(220, 140, 255); // Pastel Purple
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    let secRadius = 180;
    let minRadius = 145;
    let hrRadius = 100;
    background(0);

    // mapping the time to 360 degress angles
    let angleSec = map(sec, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
    let angleMin = map(min, 0, 60, -HALF_PI, TWO_PI - HALF_PI);
    let angleHr = map(hr, 0, 24, -HALF_PI, TWO_PI - HALF_PI);

    // drawing sec's progress
    noFill();
    stroke(255);
    strokeWeight(16);
    ellipse(width / 2, height / 2, secRadius * 2, secRadius * 2);
    stroke(secColor);
    arc(width / 2, height / 2, secRadius * 2, secRadius * 2, -HALF_PI, angleSec);

    // drawing min's progress
    stroke(255);
    strokeWeight(22);
    ellipse(width / 2, height / 2, minRadius * 2, minRadius * 2);
    stroke(minColor);
    arc(width / 2, height / 2, minRadius * 2, minRadius * 2, -HALF_PI, angleMin);

    // drawing hour's progress
    stroke(255);
    strokeWeight(27);
    ellipse(width / 2, height / 2, hrRadius * 2, hrRadius * 2);
    stroke(hrColor);
    arc(width / 2, height / 2, hrRadius * 2, hrRadius * 2, -HALF_PI, angleHr);
}
