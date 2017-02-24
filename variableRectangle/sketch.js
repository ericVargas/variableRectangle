var rectX = 27.5;                                   // declaring values for future refernece
var w = 750 - 27.5;

function setup() {                                  //creating work area
  createCanvas(750, 375);
}

function draw() {
  // background
  background(255);
  rectX = rectX + 8;                               //moving shape, increments by 8
  if (rectX > w) {
    rectX = 27.5;                                  //w - 20 (bounce effect)
  }
  noStroke();                                      // rectangle
  fill(mouseY, 300, 0);
  rect(rectX, mouseY, 55, 55);
}

function mouseReleased() {                        // shape loops as long as mouse not clicked
  loop();
}
  
  function mousePressed() {                       // loop stops when mouse is clicked and held
    noLoop();
  }
