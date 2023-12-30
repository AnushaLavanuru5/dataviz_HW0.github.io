// setup() is called once at page-load
function setup() {
    createCanvas(400, 400); // make an HTML canvas element width x height pixels  
    hrColor = color(230,139,190);
    minColor = color(244,184,218);
    secColor = color(253,228,242);
    innerColor = color(220, 140, 255); 
    angleMode(DEGREES);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    let secRadius = 110;
    let minRadius = 147;
    let hrRadius = 180;
    background(235);

    translate(width / 2, height / 2);

    // Building traingle's for hours
    fill(hrColor); 
    for (let i = 0; i < 24; i++) {
        // mapping the hours to 360 degress angles
        let angle = map(i, 0, 24, -90, 270);
        let x = cos(angle) * hrRadius;
        let y = sin(angle) * hrRadius;
        if (i < hr) {
            triangle(0, 0, x, y, cos(angle + 15) * hrRadius, sin(angle + 15) * hrRadius);
        }
    }

    // Building traingle's for minutes
    fill(minColor); 
    for (let i = 0; i < 60; i++) {
        // mapping the minutes to 360 degress angles
        let angle = map(i, 0, 60, -90, 270);
        let x = cos(angle) * minRadius;
        let y = sin(angle) * minRadius;
        if (i < min) {
            triangle(0, 0, x, y, cos(angle + 6) * minRadius, sin(angle + 6) * minRadius);
        }
    }

    // Building traingle's for seconds
    fill(secColor); 
    for (let i = 0; i < 60; i++) {
        // mapping the seconds to 360 degress angles
        let angle = map(i, 0, 60, -90, 270);
        let x = cos(angle) * secRadius;
        let y = sin(angle) * secRadius;
        if (i < sec) {
            triangle(0, 0, x, y, cos(angle + 6) * secRadius, sin(angle + 6) * secRadius);
        }
    }   
}