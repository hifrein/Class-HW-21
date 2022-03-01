
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;
let ground, left, right;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	
	engine = Engine.create();
	world = engine.world;
	
	rectMode(CENTER);
	ellipseMode(RADIUS);

	
	ground = new Ground(500, 430, 1000, 20)
	left = new Ground(600,350,15,150)
	right = new Ground(800,350,15,150)

	var ball_options = {
		isStatic:false,
		restitution:0.25,
		friction:0.8,
		density:1.2
	}


	//Create the Bodies Here.
	ball = Bodies.circle(100, 200, 20, ball_options);
	World.add(world, ball);
	
	Engine.run(engine);
	
	keyPressed();
}




function draw() {
  
  Engine.update(engine);
  background(0);
  ground.display();
  right.display();
  left.display();
  ellipse(ball.position.x, ball.position.y, 20, 20)
  drawSprites();
}

function keyPressed(){
		if (keyCode===UP_ARROW){
			Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 50, y: 29.2 })
		}
	}
