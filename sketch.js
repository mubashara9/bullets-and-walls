var thickness, bullet, speed, weight, wall;

function setup() {
  createCanvas(1600,400);
  speed= random(223,321);
  weight = random(30,52);
  thickness= random(22,83)
 bullet = createSprite(50, 200, 100, 50);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor=rgb(80,80,80);
 bullet.velocityX=speed;
}

function draw() {
  background(0);  

  if(hasCollidede(bullet,wall)){
    bullet.velocityX = 0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor= color(255,0,0)
    }
    
    if(deformation<10){
      wall.shapeColor= color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollidede(lbullet,lwall){
  bulletrightedge = lbullet.x+lbullet.width;
  wallleftedge = lwall.x;
  if(bulletrightedge>=wallleftedge){
    return true;
  }
  return false;
}