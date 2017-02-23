var rectX = 27.5;
var w = 750 - 27.5;

function setup() {
  createCanvas(750, 375);
}

function draw() {
  // background
  background(255);
  rectX = rectX + 8;
  if (rectX > w) {
    rectX = 27.5; //w - 20
  }
  // rectangle
  noStroke();
  fill(mouseY, 300, 0);
  rect(rectX, mouseY, 55, 55);
}

function mouseReleased() {
  loop();
}
  
  function mousePressed() {
    noLoop();
  }
  // line(mouseX, mouseY, pmouseX, pmouseY);
 //  print(pmouseX + "->" + mouseX);