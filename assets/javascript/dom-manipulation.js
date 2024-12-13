// Import Class list
import {
    knight,
    ranger,
    assassin,
    monsterList,
    allItemRewardsList,
    fight
} from "./class-list.js";

//EXAMPLE
let player = knight
let monster = monsterList[0]

// DOM ELEMENTS START
// Title display
const titleDisplay = document.getElementById("title-display");
const roundCounterDisplay = document.getElementById("round-counter-display");
const restartButton = document.getElementById("restart-button")

// Display Box Items
const displayBox = document.getElementById("display-box-section");

// Button Box Items
const buttonBox = document.getElementById("button-box-section");

// Player Name Variable
const playerNameInput = document.getElementById("player-name-input");
let playerName

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

function addOnclickEffect(targetClass, targetFunction) {
    const targetedItem = document.getElementsByClassName(targetClass);
    for (let item = 0; item < targetedItem.length; item++) {
        targetedItem[item].addEventListener("click", targetFunction);
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
    displayBox.innerHTML = '';
    buttonBox.innerHTML = `
    <h2 class="start-item" id="input-title">Enter your character's name</h2>
    <input class="start-item" type="text" placeholder="Enter your player name" id="player-name-input" name="player-name-input minlength="1" maxlength="13"  required>
    <button class="start-item" type="submit" id="start-button" onclick="validateInput()">Start the Game</button>`;


    // Setze die Start-Items zurück
    displayBox.innerHTML = `
    <h1 class="start-item">The Deep Drop</h1>
    <h2 class="start-item">Welcome to the bottom of the well!</h2>
    `;

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
}
restartButton.addEventListener("click", resetGame);


// Event-Listener für den Restart-Button
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);

// Event-Listener für den Start-Button
document.getElementById("start-button").addEventListener("click", validateInput);

// Next page
function goToClassChoice() {
    hideAndShowItems("start-item");
    displayItems("button", "Left", buttonBox, "reward-button", "reward-item");
    displayItems("button", "Middle", buttonBox, "reward-button", "reward-item");
    displayItems("button", "Right", buttonBox, "reward-button", "reward-item");

    addOnclickEffect("reward-button", () => goToFightSequenz());

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
    playerHPContainer.innerHTML = `Player HP: <span id="player-hp">${player.health}</span>`;
    buttonBox.appendChild(playerHPContainer);

    const monsterHPContainer = document.createElement("div");
    monsterHPContainer.classList.add("fighting-item", "title-font");
    monsterHPContainer.innerHTML = `Monster HP: <span id="monster-hp">${monster.health}</span>`;
    buttonBox.appendChild(monsterHPContainer);

}

// Next page
function goToContinueScreen() {
    hideAndShowItems("fighting-item");
    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");

    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button");
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button");

    addOnclickEffect("player-attribute-button", () => displayPlayerMenu("Attributes"));
    addOnclickEffect("player-skill-button", () => displayPlayerMenu("Skills"));
    addOnclickEffect("player-item-button", () => displayPlayerMenu("Items"));
    addOnclickEffect("player-attack-pattern-button", () => displayPlayerMenu("Attack patterns"));
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
        goToClassChoice();
    }
}