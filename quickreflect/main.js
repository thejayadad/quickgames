const button = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let timeLeft = 10;
let gameActive = true;

// Function to increase score when button is clicked
button.addEventListener("click", () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = score;
    }
});

// Countdown timer function
function countdown() {
    const timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            gameActive = false;
            button.disabled = true;
            button.textContent = "Game Over!";
            alert(`Time's up! Your final score is: ${score}`);
        }
    }, 1000);
}

// Start the game
countdown();
