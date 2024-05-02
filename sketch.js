
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ventilador;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  var ventilador_options ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ventilador = Bodies.rectangle(100, 200, 100, 20, ventilador_options)
  World.add(world, ventilador)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

var angulo = 60
function draw() 
{
  background(51);
  Engine.update(engine);
  Body.rotate(ventilador, angulo)
  push()
  translate(ventilador.position.x,ventilador.position.y)
  rotate(angulo)
  rect(0,0,100,20)
  pop()
  angulo += 0.1
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

