  
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles;
var divisions = [];
var plinkos = [];
var gameState = "play";

var divisionHeight=300;
var score = 0;
var count = 0;

function preload(){
mousePressed();
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score = "+score,20,30);

  textSize(20)
  fill("white")
 text("500",20,550);

 textSize(20)
 fill("white")
text("500",100,550);

textSize(20)
fill("white")
text("500",180,550);

textSize(20)
fill("white")
text("500",260,550);

textSize(20)
fill("white")
text("100",340,550);

textSize(20)
fill("white")
text("100",420,550);

textSize(20)
fill("white")
text("100",500,550);

textSize(20)
fill("white")
text("200",580,550);

textSize(20)
fill("white")
text("200",660,550);

textSize(20)
fill("white")
text("200",740,550);

if(gameState="end"){
  textSize(60)
  fill("white")
  text("Game Over",250,250)
}

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   
 
 
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}
function mousePressed(){
  if(gameState!=="end"){
 particles = new Particle(mouseX,10,10)
 count=count+1;
  }
}

if(particles!=null)
{
  particles.display();

  if(particles.body.position.x>300)
  {
    if(particles.body.position.y < 760)
    {
      score=score+500;
      particles=null;

    }
    if(particles.body.position.x>301)
    {
      if(particles.body.position.y < 760)
      {
        score=score+100;
        particles=null;
  
      }
      if(particles.body.position.x>601)
      {
        if(particles.body.position.y < 300)
        {
          score=score+200;
          particles=null;
    
        }
      }
    }
  }
}
if(count>5)gameState="end";


