// Laddar in bilder till spelet
let head = new Image();
head.src = "img/greenS.jpg";
head.onload = function() {
    init();
};


let velocityX = 50; // Hastighet för ormen x-led
let velocityY = 50; // Hastighet för ormen y-led

let snakeBody = [];


// Position
let xPos = 0, yPos = 0;

//Lagrar tangent-händelser
let keysDown = {};

/** Körs då sidan är laddad */
function init(){
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);
   
    gameLoop();

        // update();
        setInterval(update, 1000/10); //100 milliseconds
  }




/** Sparar undan en tangentryckning för bearbetning  */
function keyDown(e){
    keysDown[e.key] = true;
  }
  
  /**
  * Tar bort händelsen när knappen släpps. Detta så inte händelsen 
  * ligger kvar och återupprepas. 
  * Fågeln skulle då flytta sig hela tiden efter ett tryck.
  */
  function keyUp(e){
    delete keysDown[e.key];
  }

/** Spellopen */
function gameLoop() {
    update();
    render();
  
    // Bytt till requestAnimFrame istället för setInterval
    requestAnimationFrame(function() {
         gameLoop();
       });
  }


    /** Renderar canvasen */
function render(){
    let canvas = document.getElementById('gameCanvas');
    let ctx = canvas.getContext( '2d' );
   
    // Ser till att radera med vit bakgrund som det sedan skall ritas på
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);


    //draw grid
    for(let i = 1; i < 10; i++){
      ctx.beginPath();
      ctx.moveTo(i*50, 0);
      ctx.lineTo(i*50, 500);
      ctx.stroke();
    }
    for(let i = 1; i < 10; i++){
      ctx.beginPath();
      ctx.moveTo(500,i*50);
      ctx.lineTo( 0, i*50);
      ctx.stroke();
    }

    // Draw image with specified width and height
    let imageWidth = 50; // Set desired width
    let imageHeight = 50; // Set desired height
    ctx.drawImage(head, xPos, yPos, imageWidth, imageHeight);
    
    ctx.restore();

    if (snakeX == foodX && snakeY == foodY) {
      snakeBody.push([foodX, foodY]);
      placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
}

/** Uppdaterar läget på fågeln */
function update(){
    if ('ArrowLeft' in keysDown) { // Vänster     
       velocityX = -50;
       velocityY = 0;
    }
    if ('ArrowRight' in keysDown) { // Höger
      velocityX = 50;
      velocityY = 0;
    }
    if ('ArrowUp' in keysDown) { // Upp
      velocityX = 0;
      velocityY = 50;
    }
    if ('ArrowDown' in keysDown) { // Ner
      velocityX = 0;
      velocityY = -50;
    }
  }

  window.addEventListener("load",init);