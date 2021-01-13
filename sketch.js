var monkeyAnime,monkey,bananaImg,banana,jungleImg,jugleBackground,stoneImg,stone,invGround;

var bananaGrp,stoneGrp;
var score=0;
var mode="start";
function preload(){
    monkeyAnime=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
    bananaImg=loadImage("banana.png");
    jungleImg=loadImage("jungle.jpg");
    stoneImg=loadImage("stone.png");

}
function setup(){
  createCanvas(500,400);
  
  jungleBackground=createSprite(250,250,500,500); 
  jungleBackground.addImage(jungleImg);
  jungleBackground.velocityX=-3;
  
  monkey = createSprite(50,350,20,20);
  monkey.scale=0.15;
  monkey.addAnimation("fasdf",monkeyAnime);
  
  invGround=createSprite(250,395,500,2);
  invGround.visible=false;
  
  bananaGrp=createGroup();
  stoneGrp=createGroup();

}
function draw(){
 background(220);
  //features for monkey and background
  if(keyDown("space")){
     monkey.velocityY= -17;
     }
  monkey.velocityY=monkey.velocityY+0.8;  
  monkey.collide(invGround); 
if(jungleBackground.x<0){
  jungleBackground.x=jungleBackground.width/2;
}
            //checking death and score
          if(bananaGrp.isTouching(monkey)){
            score+=2;
            bananaGrp.destroyEach();
            text("Score:"+score,400,40);
             }
          if(stoneGrp.isTouching(monkey)){
           monkey.scale=0.07;
          }
    increaseSize();
  camera.position.x=monkey.x;
  camera.position.y=monkey.y;
  //spawning obstacles and all
      spawnBananas();
      spawnStones();
      drawSprites();
    text("Score:"+score,400,40);
  
}
  function spawnBananas(){
    if(frameCount%80==0){
    var rando=Math.round(random(250,300));
      banana=createSprite(500,rando,0,0);
    banana.addImage(bananaImg);
    banana.velocityX=-5;
    banana.scale=0.07;
      banana.lifetime=100;
      bananaGrp.add(banana);
      }
  }  
function spawnStones(){
    if(frameCount%65==0){
      stone=createSprite(500,370,0,0);
    stone.addImage(stoneImg);
      stone.setCollider("circle",0,0,40);
    stone.velocityX=-5;
    stone.scale=0.25;
      stone.lifetime=100;
      stoneGrp.add(stone);
      }
  }
function increaseSize(){
    switch(score){
      case 10:
        monkey.scale=0.16;
      case 20:
        monkey.scale=0.17;
      case 30:
        monkey.scale=0.18;
      case 40:
        monkey.scale=0.19;
    }
}