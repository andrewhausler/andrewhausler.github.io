
let moveX = 0;
let moveY = 0;
let pulling = false;

function setup() {
    let canvas = createCanvas(500, 500, WEBGL);
    canvas.center();
}

function draw() {
    background(173, 170, 170, 0.861);

    rotateY(moveY);
    rotateX(moveX);
    noFill();
    
    let maxRadius = 230;
    noFill();
    for (let i=30; i<=maxRadius; i += 30) {
        ellipse(0, 0, i * 2);
    }

    let sweepRadius = 208;
    let sweepSpeed = .01;
    let trailLength = 100;

    push(); 
    for (let i=1; i<trailLength; i++) {
        let angle = frameCount * sweepSpeed - i * .01;

        let x = sweepRadius * cos(angle);
        let y = sweepRadius * sin(angle);

        let alpha = map(i, 0, trailLength, 255, 0);

        stroke(0, 255, 0, alpha);
        strokeWeight(2);
        line(0, 0, 0, x, y, 0);
    }
    pop();

    sweepRadius = 208;
    sweepSpeed = 0.01;
    trailLength = 100;
    let x = sweepRadius * cos(frameCount * sweepSpeed);
    let y = sweepRadius * sin(frameCount * sweepSpeed);

    line(0, 0, 0, x, y, 0);
}
