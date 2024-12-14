// Import Class list
import {
    Character,
    monsterList,
    allItemsList,
    fight
} from "./class-list.js";

//EXAMPLE
// Variables
// Refine Stats later on
const knight = new Character("Knight", 50, 5, 500, 50, 5, 5)
const ranger = new Character("Ranger", 25, 25, 1, 25, 1, 1)
const assassin = new Character("Assassin", 25, 25, 1, 25, 1, 1)
let player = knight
let roundCounter = 0;
let monster = monsterList[roundCounter]
// Player Name Variable
let playerNameInput = document.getElementById("player-name-input");
let playerName = "";

//Display
// Display Box Items
const displayBox = document.getElementById("display-box-section");
// Button Box Items
const buttonBox = document.getElementById("button-box-section");

// FUNCTIONS START
// Generic functions
function toggleFlexbox(displayWindow, toggleType, detoggleType) {
    displayWindow.classList.toggle(toggleType);
    displayWindow.classList.toggle(detoggleType);
}

function displayItems(tagType, innerText, displayPlace, ...classAttribute) {
    const displayedItem = document.createElement(tagType);
    displayedItem.classList.add(...classAttribute);
    displayedItem.innerText = innerText;
    displayPlace.appendChild(displayedItem);
}

function hideAndShowItems(classItem) {
    const removeableItem = document.getElementsByClassName(classItem);
    for (let item = 0; item < removeableItem.length; item++) {
        removeableItem[item].classList.toggle("hidden");
    }
}

function addFunction(targetClass, ...targetFunctions) {
    const targetedItems = document.getElementsByClassName(targetClass);
    for (let item = 0; item < targetedItems.length; item++) {
        targetedItems[item].addEventListener("click", () => {
            targetFunctions.forEach(func => func());
        });
    }
}

function createCloseButton() {
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => closeButton.parentElement.remove());
    return closeButton;
}

function displayPlayerMenu(menuTitle) {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("player-menu-display");

    const title = document.createElement("h2");
    title.textContent = menuTitle;
    menuContainer.appendChild(title);

    const closeButton = createCloseButton();
    menuContainer.appendChild(closeButton);

    displayBox.appendChild(menuContainer);
}

// Reset Game
function displayUserChoiceConfirmation() {
    const confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirm-window");

    confirmWindow.textContent = "Are you sure you want to proceed?";

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.style.width = "60%";
    yesButton.addEventListener("click", () => {
        confirmWindow.remove();
        resetGame();
    });

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.style.width = "60%";
    noButton.addEventListener("click", () => confirmWindow.remove());

    confirmWindow.appendChild(yesButton);
    confirmWindow.appendChild(noButton);

    displayBox.appendChild(confirmWindow);
}

function resetGame() {
    // Lösche alle dynamisch hinzugefügten Elemente
    displayBox.innerHTML = `
    <h1 class="start-item">The Deep Drop</h1>
    <h2 class="start-item">Welcome to the bottom of the well!</h2>
    `;
    buttonBox.innerHTML = `
    <h2 class="start-item" id="input-title">Enter your character's name</h2>
    <input class="start-item" type="text" placeholder="Enter your player name" id="player-name-input" name="player-name-input" minlength="1" maxlength="13"  required>
    <button class="start-item" type="submit" id="start-button">Start the Game</button>`;

    playerNameInput = document.getElementById("player-name-input");

    // Event-Listener für den Start-Button erneut hinzufügen
    document.getElementById("start-button").addEventListener("click", validateInput);

    // Reset Flexbox
    function resetFlexbox(displayBox, buttonBox) {
        displayBox.className = "display-box display-box-flex-column";
        buttonBox.className = "button-box button-box-flex-column";
    }
    resetFlexbox(displayBox, buttonBox);
    // Setze den Spielernamen zurück
    playerName = "";
    playerNameInput.value = "";
    roundCounter = 0;
}

// Input validation
function validateInput() {
    const pattern = /^[a-zA-Z0-9]+$/;

    if (playerNameInput.value.length <= 2) {
        alert("Too short");
    } else if (!pattern.test(playerNameInput.value)) {
        alert("Wrong");
    } else if (playerNameInput.value.length >= 20) {
        alert("Too long");
    } else {
        playerName = playerNameInput.value;
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column");
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
        goToClassAndRewardChoice("start-item");
    }
}

// Next page
function goToClassAndRewardChoice(hideItem) {
    roundCounter += 1;
    hideAndShowItems(hideItem);
    displayItems("button", "Left", buttonBox, "reward-button", "reward-item");
    displayItems("button", "Middle", buttonBox, "reward-button", "reward-item");
    displayItems("button", "Right", buttonBox, "reward-button", "reward-item");

    addFunction("reward-button", () => goToFightSequenz());

    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
}

// Next page
function goToFightSequenz() {
    fight(player, monster, goToContinueScreen)
    hideAndShowItems("reward-item");
    displayItems("div", "", displayBox, "fight-sequenz-display", "fighting-item");

    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");

    displayItems("h3", "Fight in progress", buttonBox, "fighting-item", "title-font");
    displayItems("div", "", buttonBox, "fight-item");

    const playerHPContainer = document.createElement("div");
    playerHPContainer.classList.add("fighting-item", "title-font");
    playerHPContainer.innerHTML = `${playerName} HP: <span id="player-hp">${player.health}</span>`;
    buttonBox.appendChild(playerHPContainer);

    const monsterHPContainer = document.createElement("div");
    monsterHPContainer.classList.add("fighting-item", "title-font");
    monsterHPContainer.innerHTML = `Monster HP: <span id="monster-hp">${monster.health}</span>`;
    buttonBox.appendChild(monsterHPContainer);

}

// Next page
function goToContinueScreen() {
    hideAndShowItems("fighting-item");
    //if flexbox this way, then keep it - code it
    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");

    displayItems("h2", "Do you want to go to the next fight?", displayBox, "continue-screen", "continue-item")
    displayItems("button", "Continue", displayBox, "continue-screen", "continue-item", "continue-button")
    toggleFlexbox(displayBox, "display-box-flex-column", "display-box-flex-row")

    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button", "continue-item");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button", "continue-item");
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button", "continue-item");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button", "continue-item");

    addFunction("player-attribute-button", () => displayPlayerMenu("Attributes"), loopTheGame);

    addFunction("player-skill-button", () => displayPlayerMenu("Skills"));
    addFunction("player-item-button", () => displayPlayerMenu("Items"));
    addFunction("player-attack-pattern-button", () => displayPlayerMenu("Attack patterns"));
}
//Loop it
function loopTheGame() {
    addFunction("continue-button", goToClassAndRewardChoice("continue-item"))
}

//Apply reset settings
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);
//Apply validate input
document.getElementById("start-button").addEventListener("click", validateInput);