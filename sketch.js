function setup() {
  createCanvas(400,400);
  fixed = createSprite(100, 200, 50, 50);
  fixed.shapeColor="green";
  fixed.debug=true;
fixed.velocityX=1;

  moving=createSprite(200,200,50,50);
  moving.shapeColor="green";
  moving.debug=true;
  moving.velocityX=-1;
}

function draw() {
  background("blue");  


console.log(moving.x-fixed.x);

if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
  fixed.x-moving.x<moving.width/2+fixed.width/2&&
  moving.y-fixed.y<moving.height/2+fixed.height/2&&
  fixed.y-moving.y<moving.height/2+fixed.height/2){
moving.shapeColor="red";
fixed.shapeColor="red";
fixed.velocityX=fixed.velocityX*(-1);
moving.velocityX=moving.velocityX*(-1);
  
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
}

  drawSprites();
}