const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rec1,rec2,rec3,paper,ground,circle1,paper1,binImg

function preload(){

}


function setup() {
	createCanvas(900, 700);
	
	engine = Engine.create();
	world = engine.world;

	ball1 = new ball(120,170,70,70)
	dustbin1 = new Dustbin(570,630,10,120);
	dustbin2 = new Dustbin(620,670,110,10);
	dustbin3 = new Dustbin(670,630,10,100);
	ground1 = new Ground(20,685,6000,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ball1.display();
 
  dustbin2.display();
  
  ground1.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:180,y:-250});

	}
}
