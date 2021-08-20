const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge, ground, link;
var ground1;
var jointPoint;
var jointLink;
var stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(90, 400, 200, 350);
  ground1 = new Base(windowWidth - 90, 400, 200, 350);
  bridge = new Bridge(30, {x : 100, y : 500});
  jointPoint = new Base(windowWidth - 100, 500, 30, 30);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);


}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  ground1.display();
  bridge.show();
  jointPoint.display();
  stones.display();

  for(var i = 0; i<= 8; i++){
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }


}
