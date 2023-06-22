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

const dict = {
    "X": "O",
    "O": "X",
    "movesX": xSpots,
    "movesO": oSpots
};

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

function isWinner() {
    for (let i = 0; i < 8; ++i) {
        let isWinner = 1;
        for (let j = 0; j < 3; ++j) {
            if (!dict["moves" + player].includes(winnerCombos[i][j])) {
                isWinner = 0;
                break;
            }
        }
        if (isWinner === 1) {
            document.getElementById("playerMove").innerHTML = "Player " + player + " Wins😍";
            gameState = 0;
            break;
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
    dict["moves" + player].push(element.id - '0');
    document.getElementById("playerMove").innerHTML = "Player " + dict[player] + " Move";
    isWinner();
    player = dict[player];
}