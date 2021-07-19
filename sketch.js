const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 126, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text(" Use the up arrow!", 200, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    translate(  paper.x + width/2 , 0);
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();
   
  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 19,
      y: -13
    });
  }
}
