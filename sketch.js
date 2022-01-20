var st,bgImg,bim
var star, starBody;
var fada,fa
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    st = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fada = loadImage("images/fairyImage1.png");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    

    engine = Engine.create();
	world = engine.world;

    bim=createSprite(600,50);
    bim.addImage(bgImg);

    fa=createSprite(450,400);
    fa.addImage(fada);
    fa.scale= 0.3;

    star = createSprite(590,100);
	star.addImage(st);
	star.scale = 0.2
    star.velocityY=1;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){

   
      if(keyDown(LEFT_ARROW)){
       fa.velocityX= -5;
       fa.velocityY= 0;
      }
      if(keyDown(RIGHT_ARROW)){
       fa.velocityX= 5;
       fa.velocityY= 0;
      }

      if(star.isTouching(fa)){
          star.x=590;
          star.y=2;
      }
    

    drawSprites();
}
