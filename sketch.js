const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var leftbar, bottombar, rightbar;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
ground=new Ground (400, 450, 1700, 10);
bottombar=new Bottombar (450,390, 100, 150);
leftbar=new Bar (400,400,10,110);
  rightbar=new Bar (500,400,10,110);
  ball=new Paper (200,200,50);
  
  

}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display ();
  leftbar.display ();
  rightbar.display ();
  ball.display ();
  bottombar.display ();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW)


Matter.Body.applyForce(ball.body,ball.body.position,{x:15, y:-85});


}