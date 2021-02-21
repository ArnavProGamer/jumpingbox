var canvas;
var music;
var ball;
var surface1;
var surface2;
var surface3;
var surface4;
function preload(){
   
    




    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1500,1500);

    surface1 = createSprite(1500,700,20,50)
    surface1.shapeColor = "yellow"
   surface1.scale = 0.1
    surface2 = createSprite(2000,700,20,50)
    surface2.shapeColor = "blue"

    surface3 = createSprite(2500,700,20,50)
    surface3.shapeColor = "red"

    surface4 = createSprite(3000,700,20,50)
    surface4.shapeColor = "green"

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background('skyblue');
    
    if(surface1.isTouching(ball)){
      ball.shapeColor = yellow;
      ball.velocityX = 0;
      music.stop();
    }
 
    if(surface2.isTouching(ball)){
        ball.shapeColor = blue;
        ball.velocityX = 0;
        music.stop();
     }

    if(surface3.isTouching(ball)){
        ball.shapeColor = red;
        ball.velocityX = 0;
        music.stop();
      }

    if(surface4.isTouching(ball)){
        ball.shapeColor = green;
        ball.velocityX = 0;
        music.stop();
      }

    //add condition to check if box touching surface and make it box
}
