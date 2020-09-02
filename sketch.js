
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, dustbin1, dustbin2, dustbin3
var dustbin, dustbinImage

function preload() {
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);
    dustbin = createSprite(660,610);
    dustbin.addAnimation("dust",dustbinImage);
    dustbin.scale = 0.5;

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	paper = new Paper(50,650);
	ground = new Ground();

	dustbin1 = new Dustbin(600,650,10,130);
	dustbin2 = new Dustbin(660,687,110,10);
	dustbin3 = new Dustbin(720,650,10,130);

	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(200);

  paper.display();
  ground.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-95});
	}
}


