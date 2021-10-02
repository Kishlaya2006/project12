
var trex ,trex_running ,ground ,ground_image, invisible_ground, cloud, cloud1;
var number
var obstacleimg1;
  var obstacleimg2;
  var obstacleimg3;
  var obstacleimg4;
  var obstacleimg5;
  var obstacleimg6;
function preload(){
  obstacleimg1 = loadImage("obstacle1.png")
  obstacleimg2 = loadImage("obstacle2.png")
  obstacleimg3 = loadImage("obstacle3.png")
  obstacleimg4 = loadImage("obstacle4.png")
  obstacleimg5 = loadImage("obstacle5.png")
  obstacleimg6 = loadImage("obstacle6.png")


 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 ground_image = loadImage("ground2.png")
 cloud1 = loadImage("cloud.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 180, 10, 30);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 ground = createSprite(300, 180, 600, 5);
 edges = createEdgeSprites();
 ground.addImage(ground_image)
 ground.velocityX = -5;
 invisible_ground = createSprite(300, 185, 600, 5);
 
 number = Math.round(random(1,100));
 console.log(number);

}

function draw(){
  background("white")
  console.log(trex.y)

  if(keyDown("space") && trex.y > 150){
    trex.velocityY= -13 
  }


  if(ground.x < 0)
  {
    ground.x = ground.width/2
  }


  trex.velocityY = trex.velocityY + 1;
  trex.collide(invisible_ground )
  invisible_ground.visible = false;



spawnClouds()
spawnobstacles()
drawSprites()
}


function spawnClouds(){
  if(frameCount% 73 == 0){
  
cloud = createSprite(590, 30, 20, 10);
cloud.velocityX= -3;
cloud.addImage(cloud1)
console.log(frameCount)
cloud.y=Math.round(random(1,100));
cloud.scale = 0.7;
cloud.depth = trex.depth = 
trex.depth = trex.depth + 1;
cloud.lifetime = 200;

  }
}


function spawnobstacles(){
  if(frameCount% 73 == 0){
    obstacle = createSprite(590, 165, 20, 10);
    obstacle.velocityX = -4
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1: obstacle.addImage(obstacleimg1);
      break;
      case 2: obstacle.addImage(obstacleimg2);
      break;
      case 3: obstacle.addImage(obstacleimg3);
      break;
      case 4: obstacle.addImage(obstacleimg4);
      break;
      case 5: obstacle.addImage(obstacleimg5);
      break;
      case 6: obstacle.addImage(obstacleimg6);
      break;
      default : break;
    }
    obstacle.lifetime = 200;
    obstacle.scale = 0.6;
  }
}

