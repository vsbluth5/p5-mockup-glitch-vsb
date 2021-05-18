function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(230);
  
  fill(250, 250, 0)
  ellipse(0, 0, 55, 55);
  
  fill(0, 250, 250)
  ellipse(600, 0, 55, 55);
  
  fill(250, 0, 250)
  ellipse(0, 500, 55, 55);
  
  fill(0, 250, 0)
  ellipse(500, 600, 55, 55);
  
  // ellipse(20, 20, 20)
}