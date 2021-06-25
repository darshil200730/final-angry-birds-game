const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld , myEngine;
var ground12, box1,box2,box3,box4,box5;
var pg1 , pg2 , dhaatu,dhaatu2,dhaatu4,dhaatu3,udtichiriya,bg,conn,gnd1;


function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
   myWorld = myEngine.world;
 ground12 = new DECENTGROUND(600,390,1200,20)
gnd1 = new DECENTGROUND(100,280,250,250)
box1 = new Box(800,350,50,50)
box2 = new Box(950,350,50,50)
box3 = new Box(800,330,50,50)
box4 = new Box(950,330,50,50)
box5 = new Box(875,310,50,50)
pg1 = new PIG(875,350,50,50)
pg2 = new PIG(875,330,50,50)
dhaatu = new LAKRI(875,340,10,200,PI/2)
dhaatu2 = new LAKRI(875,320,10,200,PI/2)
dhaatu3 = new LAKRI(875,310,10,110,PI/6)
dhaatu4 = new LAKRI(900,310,10,110,-PI/6)
udtichiriya = new BIRD(195,50,40,40)
conn = new JUDVA(udtichiriya.bird,{x:195,y:50})

}

function draw() {
  if(bg)
  background(bg); 
  Engine.update(myEngine)
 ground12.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
pg1.display()
pg2.display()
dhaatu.display()
dhaatu2.display()
dhaatu4.display()
dhaatu3.display()
udtichiriya.display()
conn.display()
gnd1.display()
}

function preload(){
decidebg()
}

function mouseDragged() {

Matter.Body.setPosition(udtichiriya.bird,{x:mouseX,y:mouseY})

}

function mouseReleased(){

conn.Break()

}
async function decidebg()

{
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var data=await response.json()
  var time=data.datetime
  var hour=time.slice(11,13)
  console.log(hour) 
  if(hour>=6&&hour<=15)
  {
    bg=loadImage("bg (1).png")



  }
  else 
  {
    bg=loadImage("bg2.jpeg")
  }
}
