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
  
// The parameters available for beginShape() 
  // are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, 
  // TRIANGLE_STRIP, QUADS, QUAD_STRIP, 
  // and TESS (WebGL only). 
  // After calling the beginShape() function, 
  // a series of vertex() commands must follow. 
  // To stop drawing the shape, call endShape(). 
  // Each shape will be outlined with 
  // the current stroke color and filled 
  // with the fill color.
  
  beginShape(LINES);
  
  vertex(300, 20);
  vertex(150, 450);
   vertex(150, 450);
  vertex(500, 150);
  vertex(500, 150);
  vertex(50, 150);
  vertex(50, 150);
  vertex(500, 450);
  vertex(500, 450);
  // vertex(300, 20);

  endShape(CLOSE);
}
