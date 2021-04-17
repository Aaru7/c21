var thickness,wall
var bullet,speed,height

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200,200,70,50)
wall=createSprite(1200,200,thickness,height/2)



speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
bullet.velocityX=speed
}

function draw() {
  background("black"); 

  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
  }
    if(deformation>180)
{
  bullet.shapeColor="white"
}
if(deformation<180 && deformation>100){
  bullet.shapeColor="white"
}
if(deformation<100){
bullet.shapeColor="white"
  
}



  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall

if(bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}
if (hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5 * weight * speed * speed/(thickness *thickness *thicknes)
}
if(damage>10){
  wall.shapeColor=color(255,0,0)
}
if(damage<10){
  wall.shapeColor=color(0,255,0)
}




