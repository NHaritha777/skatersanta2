var sora, score,endSound;
var tree,snowman, snowball,  water, sledge;
var obstacleGroup,obstaclesGroup;
var gameState=1;
var snowmanimg;
var lifetime=5;

function setup() {
  createCanvas(1350,650);

  soraimg=loadImage("santa3.png");
  sora1=loadImage("santa1.png");
  sora2=loadImage("santa2.png");

  sora= createSprite(650, 530, 50, 50);
 sora.addImage(soraimg);
 sora.scale=0.25;

  bg= loadImage("bg3.jpeg");
  snowmanimg=loadImage("snowman.png");
  snowflakeimg= loadImage("snowflake.png");
  treeimg=loadImage("tree.png");
  snowballimg=loadImage("snowballs.png");
  houseimg=loadImage("house.png");
  sledgeimg=loadImage("sleigh2.png");
 
 score=0;

 obstacleGroup= new Group();
 obstaclesGroup= new Group();
 flakeGroup= new Group();
 
 
}

function draw() {
  background(bg); 
 sora.velocityX=0;   sora.velocityY=0;


   textSize(20);
   fill("red");
   text("Escape from the obstacles and collect snowflakes using left and right keys", 100,50);
   textSize(25);
   fill("white");
   text("SCORE: "+score, 100,80);
   

 if(gameState===1){

 

  if(keyIsDown(LEFT_ARROW)){
    sora.velocityX=-13;
    sora.velocityY=0;
    sora.addImage(sora1);
  }
  if(keyIsDown(RIGHT_ARROW)){
    sora.velocityX=13;
    sora.velocityY=0;
    sora.addImage(sora2);
  }

  if(sora.isTouching(flakeGroup)){
    score=score +10;
    }
 
  if(
 sora.isTouching(obstaclesGroup)||
 sora.isTouching(obstacleGroup)){
gameState=2
 }

 spawnObstacles();
 Obstacles();
 Snowflake();
 
}

if(gameState===2){


  textSize(30);
  fill("yellow");
  text("GAME OVER", 600,150);

  obstacleGroup.setVelocityYEach(0);
  obstaclesGroup.setVelocityYEach(0);
  flakeGroup.setVelocityYEach(0);

flakeGroup.setLifetimeEach(-1);
  obstaclesGroup.setLifetimeEach(-1);
  obstacleGroup.setLifetimeEach(-1);

 
}
 
 drawSprites();
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(Math.round(random(30,1280)), Math.round(random(0,450)),50,50);
    obstacle.velocityY = 7;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(treeimg);
       obstacle.scale=0.35;
               break;
       case 2: obstacle.addImage(snowballimg);
       obstacle.scale=0.17;
               break;
    default:break;
     }
    
     //assign scale and lifetime to the obstacle           
    // obstacle.scale = 0.35;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }


 function Obstacles(){
  if (frameCount % 200 === 0){
    var obstacle = createSprite(Math.round(random(30,1280)), Math.round(random(0,450)),50,50);
    obstacle.velocityY = 7;
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(sledgeimg);
       obstacle.scale=0.04;
               break;
       case 2: obstacle.addImage(snowmanimg);
       obstacle.scale=0.3;
               break;
       case 3: obstacle.addImage(houseimg);
       obstacle.scale=0.45;
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
    // obstacle.scale = 0.35;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstacleGroup.add(obstacle);
  }
 }


 function Snowflake(){
   if(frameCount%100===0){
   var flake= createSprite(Math.round(random(30,1280)),Math.round(random(50,400), 50,50));
   flake.addImage(snowflakeimg);
   flake.scale=0.13;
   flake.velocityY=9;
   flakeGroup.add(flake);
 }

 }