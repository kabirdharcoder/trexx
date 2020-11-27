
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime


function preload(){
  
  
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

createCanvas(600,380)

score = 0
survivalTime = 0


monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
  
ground = createSprite(400,350,1000,10)
ground.velocityX = -4
ground.x = ground.width/2
console.log(ground.x)
  
FoodGroup = createGroup();
obstacleGroup = new Group();
  
  
  

  
}


function draw() {
background("white")
  
  if(ground.x < 100){
    ground.x = ground.width/2
  }
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
 
  monkey.velocityY = monkey.velocityY+ 0.8
  
  monkey.collide(ground)
  
  text("Score:"+score,500,50)
  
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,200,50)
 
obstacle();
food();
drawSprites();
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(400,100,10,10)
    banana.velocityX = -6
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.scale = 0.1
    
  }

}

function obstacle(){
  if(World.frameCount%300===0){
    var obstacle = createSprite(400,310,10,10)
    obstacle.velocityX = -5
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.lifetime = -1
  }
    
}



