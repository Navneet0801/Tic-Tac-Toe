const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.querySelector(".back-drop");

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

//opens for editing players name
editPlayer1BtnElement.addEventListener('click', openConfigPlayer);
editPlayer2BtnElement.addEventListener('click', openConfigPlayer);

//closes the player configuration window
cancelConfigBtnElement.addEventListener('click', closeConfigPlayer);
backDropElement.addEventListener('click', closeConfigPlayer);