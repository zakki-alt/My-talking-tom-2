let score = 0;

const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";
}

target.onclick = function() {
    score++;
    scoreText.textContent = score;

    moveTarget();
};

function startGame() {
    score = 0;
    scoreText.textContent = score;

    moveTarget();
}
