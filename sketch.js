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


  push();
  noStroke();
  texture(capture);
  rectMode(CENTER);
  rotateX(angle * 0.5);
  rotateY(angle * 1.2);
  rotateZ(angle * 0.02);
  box(width / 4);
  pop();

  push();
  translate(-150, -50, 100);
  stroke(10);
  rotateX(angle * 0.5);
  rotateY(angle * 0.2);
  rotateZ(angle * 1.5);
  ambientLight(255, 0, 0);
  ambientMaterial(255);
  model(heart);
  pop();
  angle += 0.01;

}
