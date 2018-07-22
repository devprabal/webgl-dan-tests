var capture;
var heart;
var pd;

function preload() {
  heart = loadModel('Heart.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
  push();
  texture(capture);
  rectMode(CENTER);
  rotateX(angle);
  rotateY(angle * 1.2);
  rotateZ(angle * 0.02);
  box(200);
  pop();

  push();
  translate(-150, -50, 0);
  noStroke();
  rotateX(angle);
  rotateY(angle * 0.2);
  rotateZ(angle * 0.2);
  normalMaterial();
  model(heart);
  pop();
  angle += 0.01;

}
