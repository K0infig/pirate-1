const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world,ground1;
var bgImg;
var cannon1;
var angle;

var tower;


function preload() {
  bgImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(600, 610, 1200, 5);

  var tower_options={
    isStatic: true
  }
  tower = Bodies.rectangle(120, 360, 150, 300, tower_options);
  World.add(world, tower);

  angle = 20;
  cannon1 = new cannon(150,140, 150, 100, angle); 
  
 
}

function draw() {
  imageMode(CENTER);
  image(bgImg, 600, 300, 1200, 600);

  ground1.display();

  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 150, 300);

  cannon1.display();
 
  Engine.update(engine);
  
   
}
