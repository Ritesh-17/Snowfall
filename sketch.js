const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

var bgImg;
var snow;

function preload() {
  bgImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1400,710);

  engine = Engine.create();
  world = engine.world;
  
  snow = new Snow(400,100,random(80,100),random(70,111));
}

function draw() {
  
  background(bgImg);  
  
  Engine.update(engine);
  
  snow.display();

  if (snow.y > 680) {
    Matter.Body.setPosition(snow.body, {x:400, y:100})
  }
}