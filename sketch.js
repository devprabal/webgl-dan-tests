var capture;

function setup() {
  createCanvas(480, 480, WEBGL);
  capture = createCapture(VIDEO);
  capture.hide();
  // cam.size(200,200);
}
var angle = 0;
function draw() {
  // image(capture, 0, 0, width, width * capture.height / capture.width);
  // filter(INVERT);
  background(200);
  noStroke();
  texture(capture);
  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 1.2);
  rotateZ(angle * 0.02);
  // fill(200, 100, 200);
  box(200);
  angle += 0.01;
}
