// Laddar in bilder till spelet
let body = new Image();
body.src = "img/greenS.jpg";

// Position
let xPos = 260, yPos = 220;

//Lagrar tangent-händelser
let keysDown = {};

/** Körs då sidan är laddad */
function init(){
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);
   
    gameLoop();
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
   
    ctx.drawImage(body, xPos, yPos);
   
    ctx.restore();
  }

/** Uppdaterar läget på fågeln */
function update(){
    if ('ArrowLeft' in keysDown) { // Vänster     
       xPos -= 5;
    }
    if ('ArrowRight' in keysDown) { // Höger
       xPos += 5;
    }
    if ('ArrowUp' in keysDown) { // Upp
       yPos -= 5;
    }
    if ('ArrowDown' in keysDown) { // Ner
       yPos += 5;
    }
  }











  window.addEventListener("load",init);