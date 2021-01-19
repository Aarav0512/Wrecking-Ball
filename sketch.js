
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine,myWorld;
var box1;
var box2;
var box3;
var box4;
var box5,box6,box7,box8,box9,box10,box11,box12; 
var ground,ball,rope; 

function setup() {
  createCanvas(1200,400);
 myEngine =Engine.create();
 myWorld = myEngine.world;
 box1 = new Box(700,320,70,70);
 box2 = new Box(920,320,70,70);  
 box3 = new Box(700,240,70,70);
 box4 = new Box(920,240,70,70);
 box5 = new Box(810,160,70,70);
 box6 = new Box(700,180,70,70);
 box7 = new Box(700,120,70,70);
 box8 = new Box(700,60,70,70);
 box9 = new Box(920,180,70,70);
 box10 = new Box(920,120,70,70);
 box11 = new Box(810,320,70,70);
 box12 = new Box(810,240,70,70); 
 ball = new Ball(600,300);
 rope = new Rope(ball.body,{x : 600, y : 50}) 
 ground = new Ground(600,height,1200,20);
}

function draw() {
  background(0); 
  Engine.update(myEngine);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display() 
  ground.display();   
  rope.display();
  ball.display(); 
}    

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY}) 
}
          