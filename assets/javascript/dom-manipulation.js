// Import Class list
import {
    Character,
    monsterList,
    originalMonsterList,
    knightSkills,
    assassinSkills,
    rangerSkills,
    universalSkills,
    fight
} from "./class-list.js";

//EXAMPLE
// Variables
// Refine Stats later on
let roundCounter = 0;
let monster = monsterList[roundCounter]
let allSkillsList = [universalSkills]

const classOptions = [{
        name: "Knight",
        description: "A strong and resilient warrior, excelling in defense.",
        image: "./assets/images/player-classes/knight.webp"
    },
    {
        name: "Ranger",
        description: "A swift and agile archer, skilled in ranged attacks.",
        image: "./assets/images/player-classes/ranger.webp"
    },
    {
        name: "Assassin",
        description: "A deadly and elusive fighter, striking from the shadows.",
        image: "./assets/images/player-classes/assassin.webp"
    }
];

const monsterOptions = [{
        name: "slime",
        image: "./assets/images/monsters/slime.webp"
    },
    {
        name: "Swarm of Rats",
        image: "./assets/images/monsters/swarm-of-rats.webp"
    },
    {
        name: "Kobold",
        image: "./assets/images/monsters/kobold.webp"
    },
    {
        name: "Goblin",
        image: "./assets/images/monsters/goblin.webp"
    },
    {
        name: "Skeleton Warrior",
        image: "./assets/images/monsters/skeleton-warrior.webp"
    },
    {
        name: "Orc",
        image: "./assets/images/monsters/orc.webp"
    },
    {
        name: "Harpie",
        image: "./assets/images/monsters/harpie.webp"
    },
    {
        name: "Troll",
        image: "./assets/images/monsters/troll.webp"
    },
    {
        name: "Fire Elemental",
        image: "./assets/images/monsters/fire-elemental.webp"
    },
    {
        name: "The Boss",
        image: "./assets/images/monsters/boss.webp"
    },
]

// Player Name Variable
let playerNameInput = document.getElementById("player-name-input");
let playerName = "";
let player

//Display
// Display Box Items
const displayBox = document.getElementById("display-box-section");
// Button Box Items
const buttonBox = document.getElementById("button-box-section");

// FUNCTIONS START
// Reset Game
//Reset Monster
function resetMonsters() {
    monsterList.forEach((monster, index) => {
        Object.assign(monster, new Character(
            originalMonsterList[index].name,
            originalMonsterList[index].health,
            originalMonsterList[index].damage,
            originalMonsterList[index].attackSpeed,
            originalMonsterList[index].defense,
            originalMonsterList[index].dodgeChance,
            originalMonsterList[index].critChance
        ));
    });
}
// Reset Flexbox
function resetFlexbox(displayBox, buttonBox) {
    displayBox.className = "display-box display-box-flex-column";
    buttonBox.className = "button-box button-box-flex-column";
}

function resetPlayer() {
    if (player.name === "Knight") {
        player = new Character("Knight", 50, 50, 500, 50, 5, 5);
    } else if (player.name === "Ranger") {
        player = new Character("Ranger", 25, 25, 1, 25, 1, 1);
    } else if (player.name === "Assassin") {
        player = new Character("Assassin", 25, 25, 1, 25, 1, 1);
    }
}

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

    resetFlexbox(displayBox, buttonBox);
    resetMonsters()
    resetPlayer()
    // Setze den Spielernamen zurück
    playerName = "";
    playerNameInput.value = "";
    roundCounter = 0;
}

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

function removeItems(classItem) {
    const removableItems = document.getElementsByClassName(classItem);
    while (removableItems.length > 0) {
        removableItems[0].remove();
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

function selectClass(classOption) {
    if (classOption.name === "Knight") {
        player = new Character("Knight", 50, 50, 500, 50, 5, 5);
        allSkillsList.push(knightSkills)
    } else if (classOption.name === "Ranger") {
        player = new Character("Ranger", 25, 25, 1, 25, 1, 1);
        allSkillsList.push(rangerSkills)
    } else if (classOption.name === "Assassin") {
        player = new Character("Assassin", 25, 25, 1, 25, 1, 1);
        allSkillsList.push(assassinSkills)
    }
}


// Input validation - First Page
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
        goToClassAndRewardChoice("start-item");
    }
}

// Next page
function goToClassAndRewardChoice(hideItem) {

    if (displayBox.classList.contains("display-box-flex-column")) {
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column");
    }
    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    if (roundCounter == 0) {
        removeItems("start-item")

        // Erstelle für jede Klasse ein Auswahlfeld
        classOptions.forEach(classOption => {
            const classContainer = document.createElement("div");
            classContainer.classList.add("reward-display-option", "text-font", "reward-item");

            // Bild hinzufügen
            const classImage = document.createElement("img");
            classImage.src = classOption.image;
            classImage.alt = classOption.name;
            classImage.style.width = "100%";

            // Titel hinzufügen
            const classTitle = document.createElement("h3");
            classTitle.textContent = classOption.name;

            // Beschreibung hinzufügen
            const classDescription = document.createElement("p");
            classDescription.textContent = classOption.description;
            classDescription.style.fontSize = "0.8rem"

            const selectButton = document.createElement("button");
            selectButton.textContent = `Select ${classOption.name}`;
            selectButton.classList.add("reward-button", "reward-item");
            selectButton.addEventListener("click", () => {
                selectClass(classOption);
                goToFightSequenz();
            });


            // Elemente zum Container hinzufügen
            classContainer.appendChild(classImage);
            classContainer.appendChild(classTitle);
            classContainer.appendChild(classDescription);
            buttonBox.appendChild(selectButton)

            // Container in die Anzeige einfügen
            displayBox.appendChild(classContainer);
        })

    } else {
        removeItems(hideItem);

        displayItems("button", "Left", buttonBox, "reward-button", "reward-item");
        displayItems("button", "Middle", buttonBox, "reward-button", "reward-item");
        displayItems("button", "Right", buttonBox, "reward-button", "reward-item");

        addFunction("reward-button", () => goToFightSequenz());

        displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
        displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
        displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font");
    }
}

// Next page
function goToFightSequenz() {
    removeItems("reward-item");

    const monsterImage = document.createElement("img");
    monsterImage.src = monsterOptions[roundCounter].image;
    monsterImage.alt = monsterOptions[roundCounter].name;
    monsterImage.classList.add("fight-item")
    monsterImage.style.width = "80%";
    monsterImage.style.height = "80%";

    displayBox.appendChild(monsterImage)


    if (buttonBox.classList.contains("button-box-flex-row")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    displayItems("h3", "Fight in progress", buttonBox, "fight-item", "title-font");
    displayItems("div", "", buttonBox, "fight-item");

    monster = monsterList[roundCounter]

    const playerHPContainer = document.createElement("div");
    playerHPContainer.classList.add("fight-item", "title-font");
    playerHPContainer.innerHTML = `${playerName} HP: <span id="player-hp">${player.health}</span>`;
    buttonBox.appendChild(playerHPContainer);

    const monsterHPContainer = document.createElement("div");
    monsterHPContainer.classList.add("fight-item", "title-font");
    monsterHPContainer.innerHTML = `${monsterOptions[roundCounter].name} HP: <span id="monster-hp">${monster.health}</span>`;
    buttonBox.appendChild(monsterHPContainer);
    if (roundCounter < 10) {
        fight(player, monster, goToContinueScreen)
    }

}

// Next page
function goToContinueScreen() {

    removeItems("fight-item");

    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }
    if (displayBox.classList.contains("display-box-flex-row")) {
        toggleFlexbox(displayBox, "display-box-flex-column", "display-box-flex-row");
    }

    displayItems("h2", "Do you want to go to the next fight?", displayBox, "continue-screen", "continue-item")
    displayItems("button", "Continue", displayBox, "continue-screen", "continue-item", "continue-button")

    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button", "continue-item");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button", "continue-item");
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button", "continue-item");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button", "continue-item");

    addFunction("player-attribute-button", () => displayPlayerMenu("Attributes"), loopTheGame);

    addFunction("player-skill-button", () => displayPlayerMenu("Skills"));
    addFunction("player-item-button", () => displayPlayerMenu("Items"));
    addFunction("player-attack-pattern-button", () => displayPlayerMenu("Attack patterns"));

    loopTheGame()
}
//Loop it
function loopTheGame() {
    if (roundCounter < 10) {
        roundCounter++;
        addFunction("continue-button", () => {
            if (roundCounter < 10) {
                goToClassAndRewardChoice("continue-item");
            } else {
                displayItems("h2", "Congratulations! You have completed the Game", displayBox, "game-end-message");
            }
        });
    }
}


//Apply reset settings
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);
//Apply validate input
document.getElementById("start-button").addEventListener("click", validateInput);