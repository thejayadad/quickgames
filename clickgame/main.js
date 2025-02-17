    const circle = document.querySelector(".circle");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    function moveCircle() {
        const container = document.querySelector(".game-container");
        const maxX = container.clientWidth - 50;
        const maxY = container.clientHeight - 50;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
    }

    circle.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        moveCircle();
    });

    let gameInterval = setInterval(moveCircle, 1000);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert(`Game over! Your final score is: ${score}`);
    }, 30000);
