function openConfigPlayer(event){
    editedPlayer = +event.target.dataset.playerid;  //gives 1 or 2
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closeConfigPlayer(){
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';   
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = "";
    const resetplayer = document.getElementById('playername');
    resetplayer.value = "";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(form);  //event.target inplace for form also works
    const enteredPlayerName = formData.get('playername').trim();  //it takes the input and trim it  trim -> "   Navneet Kumar   " = "Navneet Kumar"

    if(!enteredPlayerName){
        form.firstElementChild.classList.add('error');
        errorOutputElement.textContent = "Please enter a valid Name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closeConfigPlayer();
}