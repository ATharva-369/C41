var drop
var engine,world
const {
    Engine, World, Bodies, Mouse, MouseConstraint, Constraint
  } = Matter

function preload(){
    
}

function setup(){
    createCanvas(300,800);
    drop=new Drop(100,100);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){

    background("black");
    drop.draw();
    drop.update();
    Matter.Engine.update(engine)
    
}   

