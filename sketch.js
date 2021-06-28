var lost=0
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 player=createSprite(50,550,30,30);
 target=createSprite(550,50,30,30);
 target.shapeColor="blue";
 bar1Group=new Group() 
 bar2Group=new Group()
 bar3Group=new Group()
 bar4Group=new Group()
}

function draw() {
  background("black"); 
  drawSprites()
  generateBlocks();
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  text("you lost"+lost,400,80)
  if(player.isTouching(target)){
    text("you won",500,80);
    player.x=50;
    player.y=550;
  }
  if(lost>10){
    text("you lost", 300,300);
    lost=0;
    
  }
    destroy(bar1Group);
    destroy(bar2Group);
    destroy(bar3Group);
    destroy(bar4Group);
}
function generateBlocks(){
  if(frameCount % 40 ==0)
  {
    obs1=createSprite(-20,380,100,20);
    obs2=createSprite(620,200,100,20);
    obs3=createSprite(-20,random(30,200),120,9);
    obs4=createSprite(620,random(210,480),120,9);
    obs1.shapeColor="red";
    obs2.shapeColor="red";
    obs3.shapeColor="pink";
    obs4.shapeColor="pink";
    obs1.velocityX=6;
    obs2.velocityX=-8;
    obs3.velocityX=5;
    obs4.velocityX=-5;
    bar1Group.add(obs1);
    bar2Group.add(obs2);
    bar3Group.add(obs3);
    bar4Group.add(obs4);
  }
}
function destroy(x){
  for(var i = 0 ; i< (x).length ;i++){
    var temp = (x).get(i) ;
    if (player.isTouching(temp)) {
      player.x=50;
      player.y=550;
      temp.destroy();
      lost++;
      temp=null;
      } 
    }
}