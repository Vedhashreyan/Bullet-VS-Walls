var wall , thickness;
var bullet,speed,weight;
var damage;
var bulletRightEdge,wallLeftEdge;



function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(0);

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);

  speed= random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
 
  if(hasColided(wall,bullet)){
    bullet.velocityX=0;

     damage =( 0.5*weight*speed*speed)/(thickness*thickness*thickness);
  }
    if(damage>10){
      wall.shapeColor=color(255,0,0);
      textSize(20);
      fill("red");
      text("Wall can't stop the bullet",1350,250);
      text("Damage is "+Math.round(damage),1350,300);
      text("Thickness of wall is "+Math.round(thickness),1350,350)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
      textSize(20);
      fill("red");
      text("Wall can stop the bullet",1350,250);
      text("Damage is "+Math.round(damage),1350,300);
      text("Thickness of wall is "+Math.round(thickness),1350,350)
    }
    drawSprites();

}

function hasColided(o1,o2){
  
  if(o1.x-o2.x<(o1.width+o2.width)/2){
    return true;
  }
  return false;
 }