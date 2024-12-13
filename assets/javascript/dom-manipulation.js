//DOM ELEMENTS START

// title display
const titleDisplay = document.getElementById("title-display")
const roundCounterDisplay = document.getElementById("round-counter-display")

//Display Box Items
const displayBox = document.getElementById("display-box-section")

//Button Box Items
const buttonBox = document.getElementById("button-box-section")

//DOM ELEMENTS END
//VARIABLES START

// Player Name Variable
const playerNameInput = document.getElementById("player-name-input")
let playerName = ""
//VARIABLES END

//FUNCTIONS START
//Generic functions
function toggleFlexbox(displayWindow, toggleType, detoggleType) {
    // Change flex-Design
    displayWindow.classList.toggle(toggleType)
    displayWindow.classList.toggle(detoggleType)
}

function displayItems(tagType, innerText, displayPlace, ...classAttribute) {
    const displayedItem = document.createElement(tagType)
    displayedItem.classList.add(...classAttribute)
    displayedItem.innerText = innerText
    displayPlace.appendChild(displayedItem)
}

function hideAndShowItems(classItem) {
    const removeableItem = document.getElementsByClassName(classItem)
    for (let item = 0; item < removeableItem.length; item++) {
        removeableItem[item].classList.toggle("hidden")
    }
}

function addOnclickEffect(targetClass, targetFunction) {
    const targetedItem = document.getElementsByClassName(targetClass)
    for (let item = 0; item < targetedItem.length; item++) {
        targetedItem[item].onclick = targetFunction
    }

}

function createCloseButton() {
    // Schließknopf erstellen
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    // Klick-Event hinzufügen, um das übergeordnete Element zu entfernen
    closeButton.addEventListener("click", function () {
        closeButton.parentElement.remove();
    });

    return closeButton;
}

//Reset Game
function displayUserChoiceConfirmation() {
    // Create and window and class connection
    const confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirm-window");

    // Insert text
    confirmWindow.textContent = "Are you sure you want to proceed?";

    // Yes-No Buttons
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.style.width = "60%"
    yesButton.onclick = () => confirmWindow.remove();

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.style.width = "60%"
    noButton.onclick = () => confirmWindow.remove();

    confirmWindow.appendChild(yesButton);
    confirmWindow.appendChild(noButton);

    // push the window into Display
    displayBox.appendChild(confirmWindow);
}

function resetGame() {
    displayUserChoiceConfirmation()
    //Unfinished
}

function goToClassChoice() {
    hideAndShowItems("start-item")
    //Display Reward choice buttons
    displayItems("button", "Left", buttonBox, "reward-button", "reward-item")
    displayItems("button", "Middle", buttonBox, "reward-button", "reward-item")
    displayItems("button", "Right", buttonBox, "reward-button", "reward-item")
    //Add onclick effect
    addOnclickEffect("reward-button", () => goToFightSequenz())
    //Create Hero Choice 
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
}

function goToFightSequenz() {
    hideAndShowItems("reward-item")
    displayItems("div", "", displayBox, "fight-sequenz-display", "fighting-item")

    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column")

    displayItems("h3", "Fight in progress", buttonBox, "fighting-item", "title-font")
    displayItems("div", "", buttonBox, "fight-item")
    //Example Code.
    let playerHP = 100;
    let monsterHP = 0;

    const playerHPContainer = document.createElement("div");
    playerHPContainer.classList.add("fighting-item", "title-font");
    playerHPContainer.innerHTML = `Player HP: <span id="player-hp">${playerHP}</span>`;
    buttonBox.appendChild(playerHPContainer);
    const monsterHPContainer = document.createElement("div");
    monsterHPContainer.classList.add("fighting-item", "title-font");
    monsterHPContainer.innerHTML = `Monster HP: <span id="monster-hp">${monsterHP}</span>`;
    buttonBox.appendChild(monsterHPContainer);

    if (monsterHP < 1 || playerHP < 1) {
        hideAndShowItems("fighting-item")
        goToContinueScreen()
    }

}

function goToContinueScreen() {
    hideAndShowItems("fighting-item")
    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column")

    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button")
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button")
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button")
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button")

    addOnclickEffect("player-attribute-button", () => displayItems("div", "", displayBox, "player-menu-display"))
    addOnclickEffect("player-skill-button", () => displayItems("div", "", displayBox, "player-menu-display"))
    addOnclickEffect("player-item-button", () => displayItems("div", "", displayBox, "player-menu-display"))
    addOnclickEffect("player-attack-pattern-button", () => displayItems("div", "", displayBox, "player-menu-display"))
}


// Input validation
function validateInput() {
    //allowed input
    const pattern = /^[a-zA-Z0-9]+$/;

    if (playerNameInput.value.length <= 2) {
        alert("To short")
    } else if (!pattern.test(playerNameInput.value)) {
        alert("Wrong")
    } else if (playerNameInput.value.length >= 20) {
        alert("To long")
    } else {
        // Update player name
        playerName = playerNameInput.value
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column")
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column")
        goToClassChoice()
    }
}