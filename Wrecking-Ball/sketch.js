const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var ground;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ball = new Ball(200,200);
    ground = new Ground(600,height,1200,20);
    slingShot = new SlingShot(ball.body,{x:100, y:120});

    box1 = new Box(650,50,50,50);
    box2 = new Box(600,50,50,50);
    box3 = new Box(650,100,50,50);
    box4 = new Box(600,100,50,50);
    box5 = new Box(650,150,50,50);
    box6 = new Box(600,150,50,50);
    box7 = new Box(650,250,50,50);
    box8 = new Box(600,250,50,50);
    box9 = new Box(650,300,50,50);
    box10 = new Box(600,300,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    ground.display();
    slingShot.display();

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
    
}