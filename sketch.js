var car,wall;
var speed,weight;





function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(150,200,100,50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);


}
  function draw() {
  background(255,255,255);

/*if (wall.x - car.x < (car.width + wall.width/4)){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if (deformation>180){
  car.shapeColor = color(255,0,0);

}
if (deformation<180 && deformation > 100){
  car.shapeColor = color(230,230,0);
}
if (deformation<100){
  car.shapeColor = color(0,255,0);
}
}*/
if (car.isTouching(wall)){
  car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if (deformation>180){
  car.shapeColor = color(255,0,0);

}
if (deformation<180 && deformation > 100){
  car.shapeColor = color(230,230,0);
}
if (deformation<100){
  car.shapeColor = color(0,255,0);
}
}
  drawSprites();
  fill("blue");
  ellipse(car.x - 25,220,30);
  ellipse(car.x + 25,220,30);
  textSize(20);
  fill("Cyan");
  text("Deformation : " + deformation, 50 ,50);
  
}


