function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(230);
  stroke(255, 204, 0);
strokeWeight(8);
  fill(55, 55, 150);
  
  beginShape(TRIANGLE_FAN);
  vertex(300, 450);
  vertex(300, 20);
  vertex(92, 50);
  vertex(57.5, 85);
  vertex(22, 50);
  vertex(57.5, 15);
  endShape();
}
