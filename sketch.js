var space , spaceImg;
var astronaut , astronautImg
var ship, shipImg;
var gameState = "play";
var gameOver, gameOverImg
var sound;
function preload(){
  spaceImg = loadImage("ce33721232fb5e0939a4b6a72b4aeef1.jpeg");
  astronautImg = loadImage("sprite_0.png");
shipImg = loadImage("sprite_0 2.png");
  gameOverImg  = loadImage("game-over-neon-sign-brick-wall-background-86413715.jpeg");
  sound = loadSound("Masked Wolf - Astronaut in the Ocean.mp3");

}

function setup() {
  createCanvas (600,600);
  
  space = createSprite(300,300,10,10);
  space.addImage("abc",spaceImg);
  space.velocityY = 5
  
  astronaut = createSprite(300,500,10,10);
  astronaut.addImage("abc",astronautImg);
  astronaut.scale = 0.3;
  
  shipsGroup = new Group();
  sound.play(true);
}
function draw() {
 background(0);
  createEdgeSprites();
 
  if(gameState === "play"){
    
    
    if (keyDown("RIGHT_ARROW")){
      astronaut.x =astronaut.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      astronaut.x =astronaut.x -5
    }
if(space.y>400){
    space.y = 300;  
}
    if(keyDown("SPACE")){
      astronaut.velocityY =-10;
      }   
     astronaut.velocityY = astronaut.velocityY+1
  
    if(astronaut.x>600){
    astronaut.destroy();
    gameState = "end"
    }
    
    if ( shipsGroup.isTouching(astronaut)){
      shipsGroup.destroyEach();
      astronaut.destroy();
      space.destroy();
      gameState = "end";
      
      
    }
spawnShip();
    
  }if(gameState === "end"){
    reset();
  }
 
  
  
  
  
  
  
  drawSprites();
}

function spawnShip(){
  if(frameCount % 60 === 0){
    ship = createSprite(300,300,10,10);
    ship.addImage("abc",shipImg);
    ship.scale = 0.3
    ship.velocityY = 5;
  ship.x=Math.round(random(130,460)); 
    shipsGroup.add(ship);
  }
}

function reset(){
  gameOver = createSprite(300,300,10,10);
  gameOver.addImage("abc",gameOverImg);
  
  
  
}
  
