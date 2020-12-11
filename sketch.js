
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;
var invisibleGround
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   score=0;
  var survivalTime=0;
    
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
}


function draw() {
    background(225);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  fruits();
  obstacles();
  
  

    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround);
  drawSprites();
}

function fruits(){
 //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var fruits = createSprite(200,120,40,10);
    fruits.y = Math.round(random(100,250));
    fruits.addImage(bananaImage);
    fruits.scale = 0.1;
    fruits.velocityX = -3;
    
     //assign lifetime to the variable
    fruits.lifetime = 200;
    
    
    //add each cloud to the group
   
  }
  
  
}

function obstacles(){
  
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(400,310,900,10);
    obstacles.x = Math.round(random(80,120));
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    
   
    
  
  
  
}
}


