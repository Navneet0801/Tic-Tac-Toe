function resetGameStatus(){
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;

    gameOverElement.style.display = 'none';
    gameOverElement.firstElementChild.innerHTML = "You Won <span>Player Name</span>!";

    let k = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[k];
            gameBoardItemElement.textContent = "";
            gameBoardItemElement.classList.remove('disabled');
            k++;
        }
    }
}

function startNewGame(){
    if(players[0].name === "" || players[1].name === ""){
        alert("Please enter the names before you start the game!");
        return;
    }

    resetGameStatus();

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else{
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){


    if(event.target.tagName !== 'LI' || gameIsOver){
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col;
    const selectedRow = selectedField.dataset.row;

    if(gameData[selectedRow][selectedColumn] > 0){
        alert("Please select an empty feild!");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');


    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    // console.log(gameData);

    const winnerId = checkForGameOver();
    // console.log(winnerId);

    if(winnerId !== 0){
        endGame(winnerId);
    }

    currentRound++; 
    switchPlayer();
}

function checkForGameOver(){

    //check for rows for same symbol
    for(let i=0; i<3; i++){
        if(gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]){
            return gameData[i][0];
        }
    }

    //check for columns for same symbol
    for(let i=0; i<3; i++){
        if(gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }

    //check diagonal top-left to bottom-right
    if(gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]){
        return gameData[0][0];
    }

    //check diagonal bottom-left to top-right
    if(gameData[2][0] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]){
        return gameData[2][0];
    }

    if(currentRound === 9){
        return -1;   // in case draw
    }

    return 0;  //in case there are more rounds left
}

function endGame(winnerId){
    gameOverElement.style.display = 'block';
    gameIsOver = true;

    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent = "It's a DRAW!";
    }
}