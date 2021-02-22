
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
 var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;
 var bobDiameter,bobX,bobY;

 var engine,world;


 function setup() {
	createCanvas(1200,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	bobX=width/2;
	bobY=(height/4)+500;
	bob1=new Bob(bobX-bobDiameter*2,bobY,bobDiameter);
	bob2=new Bob(bobX-bobDiameter,bobY,bobDiameter);
	bob3=new Bob(bobX,bobY,bobDiameter);
	bob4=new Bob(bobX+bobDiameter,bobY,bobDiameter);
	bob5=new Bob(bobX+bobDiameter*2,bobY,bobDiameter);

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)

	
		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  text(mouseX + "," + mouseY, mouseX, mouseY);


  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function drawLine(constraint){
	bobpos=constraint.bodyA.position
	roofpos=constraint.bodyB.position
	roofOffset=constraint.pointB
	roofBodyX=roofpos.x+roofOffset.x
	roofBodyY=roofpos.y+roofOffset.y
	line(bobpos.x,bobpos.y,roofBodyX,roofBodyY)
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}

}



