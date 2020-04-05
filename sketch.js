const Engine = Matter.Engine   ;
const World= Matter.World  ;
const Bodies = Matter.Bodies   ;
const Constraint = Matter.Constraint   ;

var engine, world  ;

var ground,plat  ;

var block1

function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create()   ;
  world = engine.world   ;
  var option =
  {
    isStatic:true 
  }
  ground = Bodies.rectangle(600,600,1220,30,option)   ;
  plat = Bodies.rectangle(700,200,100,20,option)   ;
  block1 = new Block(250,570,50,50)   ;
  block2 = new Block(300,570,50,50)   ;
  block3 = new Block(350,570,50,50)   ;
  block4 = new Block(400,570,50,50)   ;
  block5 = new Block(450,570,50,50)   ;
  block6 = new Block(500,570,50,50)   ;

  block7 = new Block(475,520,50,50)   ;
  block8 = new Block(425,520,50,50)   ;
  block9 = new Block(375,520,50,50)   ;
  block10 = new Block(325,520,50,50)   ;
  block11 = new Block(275,520,50,50)   ;

  block12 = new Block(300,470,50,50)   ;
  block13 = new Block(375,470,50,50)   ;
  block14 = new Block(425,470,50,50)   ;
  block15 = new Block(475,470,50,50)   ;

  block16 = new Block(475,420,50,50)   ;
  block17 = new Block(475,420,50,50)   ;
  block18 = new Block(425,420,50,50)   ;
  block19 = new Block(300,420,50,50)   ;

  block20 = new Block(675,150,50,50)   ;
  block21 = new Block(725,150,50,50)   ;
  block22 = new Block(700,100,50,50)   ;
  
/**/
 
  World.add(world,ground)   ;
  World.add(world,plat)   ;

  
}

function draw(){
  background(0)   ;
  Engine.update(engine)   ;
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1220,30)   ;
  rect(plat.position.x,plat.position.y,100,20)   ;
  
 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  
  
}
