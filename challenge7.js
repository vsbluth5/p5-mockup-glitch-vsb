function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(230);
  stroke(255, 204, 0);
strokeWeight(8);
  fill(55, 55, 150);
  
  // What is TRIANGLE_FAN?
  // This is definitely not the best way to draw a star
  beginShape(TRIANGLE_FAN);
  
  vertex(300, 20);
  vertex(150, 450);
  vertex(500, 150);
  vertex(50, 150);
  vertex(500, 450);
  vertex(300, 20);

  endShape();
}
