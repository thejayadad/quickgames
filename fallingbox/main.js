const fallingBox = document.querySelector(".falling-box");
const player = document.querySelector(".player");
const scoreDisplay = document.getElementById("score");

let score = 0;
let boxSpeed = 3; // Falling speed
let playerSpeed = 20; // Player movement speed
let boxPosition = { x: 135, y: 0 }; // Box starting position
let playerPosition = 110; // Player starting position

// Move player left and right using arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && playerPosition > 0) {
        playerPosition -= playerSpeed;
    }
    if (event.key === "ArrowRight" && playerPosition < 220) {
        playerPosition += playerSpeed;
    }
    player.style.left = `${playerPosition}px`;
});

// Function to make the box fall
function dropBox() {
    boxPosition.y += boxSpeed;

    if (boxPosition.y >= 370) {
        checkCollision();
        resetBox();
    }

    fallingBox.style.top = `${boxPosition.y}px`;
}

// Function to check collision with player
function checkCollision() {
    let boxLeft = boxPosition.x;
    let boxRight = boxLeft + 30;
    let playerLeft = playerPosition;
    let playerRight = playerLeft + 80;

    if (boxRight > playerLeft && boxLeft < playerRight) {
        score++;
        scoreDisplay.textContent = score;
        boxSpeed += 0.2; // Increase difficulty over time
    }
}

// Function to reset the box position after falling
function resetBox() {
    boxPosition.y = 0;
    boxPosition.x = Math.random() * 270; // Random start position
    fallingBox.style.left = `${boxPosition.x}px`;
}

// Start the game loop
setInterval(dropBox, 30);
