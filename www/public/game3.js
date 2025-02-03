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

let highscore = fetchHighscore();
let gamescore = 0;

let directionChanged = false;
let table = document.getElementById("highscoreTable");



let score = document.getElementById("score");
score.innerHTML = "Score: " + gamescore;


// Variable to store the rotation angle
let rotationVinkel = 0;

// Function to initialize the game when the window loads
window.onload = function () {
    // Get the canvas element and its context for drawing
    board = document.getElementById("board");
    context = board.getContext("2d");
    fetchAllHighscores();

    // Place the first food item on the board
    placeFood();

    // Add an event listener for key presses to change the snake's direction
    document.addEventListener("keyup", changeDirection);

    // Call the update function every 100 milliseconds to update the game state
    setInterval(update, 1000 / 6); 
    re.addEventListener("click", restart);

}

// Function to update the game state
function update() {
    // If the game is over, exit the function
    if (gameOver) {
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

    directionChanged = false;

}
function renderGrid() {
    const xMax = board.width;  // Width of the canvas
    const yMax = board.height; // Height of the canvas
    const gridSize = 30;       // Spacing between grid lines

    // Draw the grid
    context.beginPath();
    context.strokeStyle = "#3A5A40"; // Grid line color

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

    if (directionChanged) return; // Prevent multiple direction changes in one update cycle

    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
        rotationVinkel = 0; // Set the angle to -90 degrees
        directionChanged = true;
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
        rotationVinkel = 180; // Set the angle to 90 degrees
        directionChanged = true;
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
        rotationVinkel = 270; // Set the angle to 180 degrees
        directionChanged = true;
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
        rotationVinkel = 90; // Set the angle to 0 degrees
        directionChanged = true;
    }
}

function clearboard() {
    // Clear the board by filling it with a black rectangle
    context.fillStyle = "#588157";
    context.fillRect(0, 0, board.width, board.height);

}

function checkFood() {
    // Check if the snake has eaten the food
    if (snakeX == foodX && snakeY == foodY) {
        // Add a new segment to the snake's body
        snakeBody.push([foodX, foodY]);
        gamescore += 1;
        updateScore();

        // Place a new food item on the board
        placeFood();
    }
}
function updateScore() {
    score.innerHTML = "Score: " + gamescore;
}
function updateHighscore() {
    let highscoreHTML = document.getElementById("highscoreHTML");
    highscoreHTML.innerHTML = "Highscore: " + highscore;
}

function moveSnake() { //fix för animation är 0.5 och köra movesnake() två gånger update()
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
        if (highscore < gamescore) {
            setHighscore(gamescore);
            highscore = gamescore;
            updateHighscore();

        }
        alert("Game Over");
        fetchAllHighscores();
        restart();

    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            if (highscore < gamescore) {
                setHighscore(gamescore);
                highscore = gamescore;
                updateHighscore();

            }
            alert("Game Over");
            restart();
        }
    }
}

// Function to place a new food item on the board at a random position
function placeFood() {
    let validPosition = false;

    while (!validPosition) {
        // Generate random coordinates for the food within the bounds of the board
        foodX = Math.floor(Math.random() * cols) * blockSize;
        foodY = Math.floor(Math.random() * rows) * blockSize;

        // Check if the generated coordinates overlap with any part of the snake's body
        validPosition = true;
        for (let i = 0; i < snakeBody.length; i++) {
            if (foodX === snakeBody[i][0] && foodY === snakeBody[i][1]) {
                validPosition = false;
                break;
            }
        }
    }
}

function restart() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    highscore = fetchHighscore();
    snakeBody = [];
    gameOver = false;
    placeFood();
    gamescore = 0;

}


async function fetchHighscore() {
    try {
        const response = await fetch("http://localhost/api/getHighscore.php");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        highscore = parseInt(result);
        updateHighscore();
        console.log('Highscore:', highscore);


    } catch (error) {
        console.error(error.message);
    }

}

async function setHighscore(highscore) {
    console.log('Sending highscore:', highscore);
    const response = await fetch("http://localhost/api/setHighscore.php", {
        method: "POST",
        body: JSON.stringify({ highscore: highscore }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);

}

async function fetchAllHighscores() {
    try {
       const response = await fetch("http://localhost/api/getAllHighscores.php");
       if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
       }

       const result = await response.json();
       console.log(result);

        // Clear the table before adding new highscores 
        //! LÖS DETTA SÅ ATT DET BLIR SMIDIGARE BORTAGNING AV TABELL RADERNA
        while (table.rows.length > 1) {
           table.deleteRow(1);
        }

       //Lägger till alla highscores i tabellen med en forEach loop eftersom att det är en associativ array
       result.forEach((highscore, index) => {
          let row = table.insertRow(index + 1); // Insert at the next position
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          cell1.innerHTML = highscore.username;
          cell2.innerHTML = highscore.highscore;
       });
    } catch (error) {
       console.error(error.message);
    }
 }


