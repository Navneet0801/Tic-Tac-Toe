const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.querySelector(".back-drop");
const formElement = document.getElementById('form');
const errorOutputElement = document.getElementById('config-error');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

//opens for editing players name
editPlayer1BtnElement.addEventListener('click', openConfigPlayer);
editPlayer2BtnElement.addEventListener('click', openConfigPlayer);

//closes the player configuration window
cancelConfigBtnElement.addEventListener('click', closeConfigPlayer);
backDropElement.addEventListener('click', closeConfigPlayer);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements){
    gameAreaElement.addEventListener('click', selectGameField);
}