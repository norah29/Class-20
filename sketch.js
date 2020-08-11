var fixed,moving;

function setup() {


  createCanvas(800,400);
 moving=createSprite(400, 200, 50, 50);
 fixed=createSprite( 200,200,60,80);

 moving.shapeColor="red";
 fixed.shapeColor="blue";
}

function draw() {

  background(255,255,255); 
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  
  drawSprites();
}