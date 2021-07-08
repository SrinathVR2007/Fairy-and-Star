var starImg,bgImg;
var star, starBody ;
var fairy , fairyImg , fairyBody , fairyVoice; 
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body ;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyVoice = loadSound("JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);
   
	fairy = createSprite(480,500);
	fairy.addAnimation("fairyAnim",fairyImg);
	fairy.scale = 0.3 ;
	
	//write code to play fairyVoice sound
      fairyVoice.play();
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage("starPic",starImg);
	star.scale = 0.2;
   

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	fairyBody = Bodies.circle(480 , 500 , 5,{isStatic:true} );
	World.add(world,fairyBody);
	Engine.run(engine);
	Engine.update(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y
  
  fairy.x= fairyBody.position.x
  fairy.y=fairyBody.position.y 

  console.log(star.y);
if(star.y>470&& starBody.position.y>470) {
	Matter.Body.setStatic(starBody,true)
} //write code to stop star in the hand of fairy
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = 10 ; 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = -10 ;
	}

}