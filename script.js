let player = "X";
let gameState = 1;
let totalMoves = 9;

const xSpots = [], oSpots = [];
const winnerCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function resetGame() {
    for (let i = 1; i <= 9; ++i) {
        document.getElementById(i).innerHTML = "&nbsp;&nbsp;";
        document.getElementById(i).disabled = false;
    }
    player = "X";
    xSpots.length = 0;
    oSpots.length = 0;
    totalMoves = 9;
    gameState = 1;
    document.getElementById("playerMove").innerHTML = "Player " + player + " Move";
}

function isWinner(player) {
    let isXWinner, isOWinner;
    if (player == "O") {
        for (let i = 0; i < 8; ++i) {
            isXWinner = 1;
            for (let j = 0; j < 3; ++j) {
                if (!xSpots.includes(winnerCombos[i][j])) {
                    isXWinner = 0;
                    break;
                }
            }
            if (isXWinner === 1) {
                document.getElementById("playerMove").innerHTML = "Player X Wins😍";
                gameState = 0;
                break;
            }
        }
    } else {
        for (let i = 0; i < 8; ++i) {
            isOWinner = 1;
            for (let j = 0; j < 3; ++j) {
                if (!oSpots.includes(winnerCombos[i][j])) {
                    isOWinner = 0;
                    break;
                }
            }
            if (isOWinner === 1) {
                document.getElementById("playerMove").innerHTML = "Player O Wins😍";
                gameState = 0;
                break;
            }
        }
    }
    if (--totalMoves === 0 && gameState != 0) {
        gameState = 0;
        document.getElementById("playerMove").innerHTML = "Draw";
    }
}

function markButton(element) {
    if (gameState === 0) {
        return;
    }
    element.innerHTML = player;
    if (player === "X") {
        xSpots.push(element.id - '0');
    } else {
        oSpots.push(element.id - '0');
    }
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
    document.getElementById("playerMove").innerHTML = "Player " + player + " Move";
    isWinner(player);
}