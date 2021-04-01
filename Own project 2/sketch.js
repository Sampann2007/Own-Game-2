
var laser2 
var laser3
var laser4 
var thief 
var laser6 
var laser7 
var WinningLine
var laser8 
var laser9
var laser10
var thiefImg;
var lasersImg;

 


  
function preload(){
thiefImg=loadImage("run4.png")
lasersImg=loadImage("Anchor-removebg-preview.png")
}
   




function setup(){
laser2 = createSprite(80,1,150,5);
laser2.addImage(lasersImg);
laser2.scale=0.3
laser2.setCollider("rectangle",0,0,150,150)


laser3 = createSprite(353,72,150,5);
laser3.addImage(lasersImg);
laser3.scale=0.3
laser3.setCollider("rectangle",0,0,150,150)


laser4 = createSprite(200,2,5,100);
laser4.addImage(lasersImg);
laser4.scale=0.3
laser4.setCollider("rectangle",0,0,150,150)


thief = createSprite(25,379,25,25);
thief.addImage(thiefImg);
thief.scale=0.3;


laser6 = createSprite(200,2,150,5);
laser6.addImage(lasersImg);
laser6.scale=0.3
laser6.setCollider("rectangle",0,0,150,150)


laser7 = createSprite(150,1,5,150);
laser7.addImage(lasersImg);
laser7.scale=0.3
laser7.setCollider("rectangle",0,0,150,150)


WinningLine= createSprite(376,0,25,1);
WinningLine.shapeColor="white";


laser8 = createSprite(240,80,5,300);
laser8.addImage(lasersImg);
laser8.scale=0.3
laser8.setCollider("rectangle",0,0,150,150)


laser9= createSprite(62,78,300,5);
laser9.addImage(lasersImg);
laser9.scale=0.3
laser9.setCollider("rectangle",0,0,150,150)


laser10= createSprite(180,0,10,200);
laser10.addImage(lasersImg);
laser10.scale=0.3
laser10.setCollider("rectangle",0,0,150,150)


laser2.setVelocity(0,2);
laser3.setVelocity(0,3);
laser4.setVelocity(0,2);

laser6.setVelocity(0,2);
laser7.setVelocity(0,2);
laser8.setVelocity(0,2);
laser9.setVelocity(0,3);
laser10.setVelocity(0,3);



}

function draw() {
  background("yellow")
  
  
  shape(390,0,380,10,390,20,400,10);
 
  
  edges=createEdgeSprites();
  

 
  
  

  
  
   laser2.bounceOff(edges);
   laser3.bounceOff(edges);
   laser4.bounceOff(edges);
 laser6.bounceOff(edges);
  laser7.bounceOff(edges);
  laser8.bounceOff(edges);
  laser10.bounceOff(edges);

  thief.collide(edges)
  thief.setVelocity(0,0);
   
  
   
   
 
  

   
   

   
   
   
   
   
   
   
  

  
 if(keyDown(UP_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = -2;
  }
  if (keyDown(DOWN_ARROW)) {
    thief.velocityX = 0;        
    thief.velocityY = 2;
  }
  if (keyDown(LEFT_ARROW)) {
    thief.velocityX = -2;
    thief.velocityY =0;
    
  }
  if (keyDown(RIGHT_ARROW)){
    thief.velocityX =2;
   thief.velocityY =0;
   
  }
   
  
   
 
 
   
   
   
   
   
   
   
  drawSprites();
   if (thief.isTouching(laser2)||thief.isTouching(laser3)||thief.isTouching(laser4)||thief.isTouching(laser6)||thief.isTouching(laser7)||thief.isTouching(laser8)||thief.isTouching(laser9)||thief.isTouching(laser10)){
     fill("blue");
     textSize(24);
     text("THIEF IS CAUGHT",150,200);
    laser2.setVelocity(0, 0);
    laser3.setVelocity(0, 0);
    laser4.setVelocity(0, 0);
    
    laser6.setVelocity(0,0);
    laser7.setVelocity(0,0);
    laser8.setVelocity(0,0);
    laser9.setVelocity(0,0);
    laser10.setVelocity(0,0);
    thief.setVelocity(0, 0);
   }
     if(thief.isTouching(WinningLine)){
     stroke("blue");
     fill("blue");
     textSize(24);
     text("THIEF WON",150,200);
     thief.setVelocity(0,0);
   }

}











