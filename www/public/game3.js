//board
let blockSize = 30;
let rows = 15;
let cols = 15;
let board;
let context;

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// Initial velocity of the snake
let velocityX = 0;
let velocityY = 0;

// Array to store the snake's body segments
let snakeBody = [];

// letiables to store the food's position
let foodX;
let foodY;

// Flag to indicate if the game is over
let gameOver = false;

// Load images for the snake and the food
let snakeHead = new Image();
snakeHead.src = 'img/head.png'; // Replace with the path to your snake image

let foodImage = new Image();
foodImage.src = 'img/IdasApple.png'; // Replace with the path to your food image

let snakeBodyImage = new Image();
snakeBodyImage.src = 'img/Sbody.png'; // Replace with the path to your snake body image

let re = document.getElementById("re");


let highscore = 0;


let score = document.getElementById("score");
score.innerHTML = "Score: " + score;


// Variable to store the rotation angle
let rotationVinkel = 0;

// Function to initialize the game when the window loads
window.onload = function () {
    // Get the canvas element and its context for drawing
    board = document.getElementById("board");
    context = board.getContext("2d");

    // Place the first food item on the board
    placeFood();

    // Add an event listener for key presses to change the snake's direction
    document.addEventListener("keyup", changeDirection);

    // Call the update function every 100 milliseconds to update the game state
    setInterval(update, 1000 / 8);
    re.addEventListener("click", restart);

}

// Function to update the game state
function update() {
    fetchHighscore();
    // If the game is over, exit the function
    if (gameOver) {
        if (highscore < score) {
            highscore = score;
        }
        return;
    }

    clearboard(); //clears the board
    // Draw the food image
    context.drawImage(foodImage, foodX, foodY, blockSize, blockSize);

    renderGrid(); //ritar ut rutnätet

    checkFood();  //kollar om maten är uppäten

    moveSnake(); //flyttar ormen

    updateSnake(); //uppdaterar ormen

    drawSnake(); //ritar ut allt

    checkGameOver(); //kollar om spelet är över

}
function renderGrid() {
    const xMax = board.width;  // Width of the canvas
    const yMax = board.height; // Height of the canvas
    const gridSize = 30;       // Spacing between grid lines

    // Draw the grid
    context.beginPath();
    context.strokeStyle = "lightgray"; // Grid line color

    // Vertical grid lines
    for (let x = 0; x <= xMax; x += gridSize) {
        context.moveTo(x, 0);         // Move to the top of the column
        context.lineTo(x, yMax);      // Draw to the bottom of the column
    }

    // Horizontal grid lines
    for (let y = 0; y <= yMax; y += gridSize) {
        context.moveTo(0, y);         // Move to the start of the row
        context.lineTo(xMax, y);      // Draw to the end of the row
    }

    context.stroke(); // Render all the grid lines
}


// Function to change the snake's direction based on key presses
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
        rotationVinkel = 0; // Set the angle to -90 degrees
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
        rotationVinkel = 180; // Set the angle to 90 degrees
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
        rotationVinkel = 270; // Set the angle to 180 degrees
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
        rotationVinkel = 90; // Set the angle to 0 degrees
    }
}

function clearboard() {
    // Clear the board by filling it with a black rectangle
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

}

function checkFood() {
    // Check if the snake has eaten the food
    if (snakeX == foodX && snakeY == foodY) {
        // Add a new segment to the snake's body
        snakeBody.push([foodX, foodY]);
        highscore++;
        updateScore();

        // Place a new food item on the board
        placeFood();
    }
}
function updateScore() {
    score.innerHTML = "Score: " + highscore;
}

function moveSnake() {
    // Move the snake's body segments
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
}

function updateSnake() {
    // Update the snake's position based on its velocity
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
}

function drawSnake() {
    // Draw the snake's head with rotation
    context.save();
    context.translate(snakeX + blockSize / 2, snakeY + blockSize / 2);
    context.rotate(rotationVinkel * Math.PI / 180);
    context.drawImage(snakeHead, -blockSize / 2, -blockSize / 2, blockSize, blockSize);
    context.restore();

    // Draw the snake's body segments
    for (let i = 0; i < snakeBody.length; i++) {
        context.drawImage(snakeBodyImage, snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

}

function checkGameOver() {
    // Check for game over conditions
    if (snakeX < 0 || snakeX >= cols * blockSize || snakeY < 0 || snakeY >= rows * blockSize) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}

// Function to place a new food item on the board at a random position
function placeFood() {
    // Generate random coordinates for the food within the bounds of the board
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function restart() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    highscore = 0;
    snakeBody = [];
    gameOver = false;
    placeFood();
    alert("Game Restarted");
}


async function fetchHighscore() {
    const url = "http://localhost/api/getHighscore.php";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const highscore = await response.json();
      highscoreHTML = document.getElementById("highscoreHTML");
      highscoreHTML.innerHTML = "Highscore: " + highscore;
    } catch (error) {
      console.error(error.message);
    }

  }