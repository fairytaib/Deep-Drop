// Import Class list
import {
    Character,
    monsterList,
    originalMonsterList,
    allItemsList,
    knightSkills,
    assassinSkills,
    rangerSkills,
    universalSkills,
    fight,
    playerAvailableFightingStyle,
    playerAvailableItems,
    playerAvailableSkills,
    playerActiveFightingStyle

} from "./class-list.js";

//EXAMPLE
// Variables
// Refine Stats later on
let roundCounter = 0;
let monster = monsterList[roundCounter]

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
        player = new Character("Knight", 10, 10, 10000, 10, 5, 5);
    } else if (player.name === "Ranger") {
        player = new Character("Ranger", 10, 10, 10000, 10, 1, 1);
    } else if (player.name === "Assassin") {
        player = new Character("Assassin", 10, 10, 10000, 10, 1, 1);
    }
}

function displayUserChoiceConfirmation() {
    const confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirm-window");

    confirmWindow.textContent = "Are you sure you want to proceed?";

    const yesButton = document.createElement("button");
    yesButton.classList.add("yes-reset-button")
    yesButton.textContent = "Yes";
    yesButton.addEventListener("click", () => {
        confirmWindow.remove();
        resetGame();
    });

    const noButton = document.createElement("button");
    noButton.classList.add("no-reset-button")
    noButton.textContent = "No";
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

function displayTutorial() {
    const tutorialContainer = document.createElement("div");
    tutorialContainer.classList.add("tutorial-window");

    const title = document.createElement("h2");
    title.textContent = "How to play";

    const tutorialText = document.createElement("p")
    tutorialText.innerText = "Your mission is to survive 10 rounds of combat, improve your character, and conquer the depths of the well."
    tutorialText.classList.add("tutorial-text")

    const closeButton = createCloseButton();

    const buttonContainer = document.createElement("div")
    buttonContainer.classList.add("next-slide-button-box")

    const rightSlideButton = document.createElement("button")
    rightSlideButton.innerHTML = "<i class='bx bx-chevron-right' ></i>"
    rightSlideButton.classList.add("next-slide-button")

    const leftSlideButton = document.createElement("button")
    leftSlideButton.innerHTML = "<i class='bx bx-chevron-left' ></i>"
    leftSlideButton.classList.add("next-slide-button")

    //Append it
    displayBox.appendChild(tutorialContainer);
    tutorialContainer.appendChild(closeButton);
    tutorialContainer.appendChild(title)
    tutorialContainer.appendChild(tutorialText)
    tutorialContainer.appendChild(buttonContainer)
    buttonContainer.appendChild(leftSlideButton)
    buttonContainer.appendChild(rightSlideButton)
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

function displayPlayerMenu(menuTitle, itemContent) {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("player-menu-display");

    const title = document.createElement("h2");
    title.textContent = menuTitle;
    menuContainer.appendChild(title);

    const closeButton = createCloseButton();
    menuContainer.appendChild(closeButton);

    displayBox.appendChild(menuContainer);

    displayPlayerMenuItem(itemContent, menuContainer)
}

function displayPlayerMenuItem(itemContent, appendBox) {
    if (itemContent.length === 0) {
        const text = document.createElement("p")
        text.innerText = "You don't have anything in here yet"
        text.classList.add("player-menu-text")
        appendBox.appendChild(text)
    } else {
        itemContent.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("player-menu-display-option", "text-font");

            // Name des Fighting Styles
            const itemTitle = document.createElement("h3");
            itemTitle.textContent = item.name;

            // Beschreibung des Fighting Styles
            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            // Button zur Auswahl
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select ${item.name}`;
            selectButton.classList.add("reward-button", "player-inner-menu-button");
            selectButton.addEventListener("click", () => selectFightingStyle(item));

            // Elemente hinzufügen
            appendBox.appendChild(itemContainer)
            itemContainer.appendChild(itemTitle);
            itemContainer.appendChild(itemDescription);
            itemContainer.appendChild(selectButton);
        })
    }
}

function selectFightingStyle(style) {
    if (playerActiveFightingStyle) {
        resetFightingStyleEffects(playerActiveFightingStyle);
    }

    // Aktuellen Style speichern und Effekte anwenden
    playerActiveFightingStyle = style;
    style.effect(player);
}

function resetFightingStyleEffects(style) {
    if (!style) return;

    // Effekte umkehren (angenommen, die Effekte sind linear)
    if (style.name === "Aggressive Attacker") {
        player.attackSpeed /= 1.15; // Rückgängig machen
        player.defense /= 0.8;
    } else if (style.name === "Defensive Tank") {
        player.incomingDamageReduction -= 0.3;
        player.attackSpeed /= 0.75;
    } else if (style.name === "Critical Fighter") {
        player.critChance -= 0.5;
        player.attackSpeed /= 0.8;
    } else if (style.name === "Skillful Dodger") {
        player.dodgeChance -= 0.2;
        player.physicalDamage /= 0.85;
        player.magicalDamage /= 0.85;
    }
}

function selectClass(classOption) {
    if (classOption.name === "Knight") {
        player = new Character("Knight", 10, 10, 1000, 10, 5, 5);
        for (let i = 0; i < knightSkills.length; i++) {
            universalSkills.push(knightSkills[i]);
        }
    } else if (classOption.name === "Ranger") {
        player = new Character("Ranger", 10, 10, 1000, 10, 5, 5);
        for (let i = 0; i < rangerSkills.length; i++) {
            universalSkills.push(rangerSkills[i]);
        }
    } else if (classOption.name === "Assassin") {
        player = new Character("Assassin", 10, 10, 1000, 10, 5, 5);
        for (let i = 0; i < assassinSkills.length; i++) {
            universalSkills.push(assassinSkills[i]);
        }
    }
}

function selectReward(reward) {
    if (reward.type === "Item") {
        playerAvailableItems.push(reward);
    } else if (reward.type === "Skill") {
        playerAvailableSkills.push(reward);
    } else if (reward.type === "Heal") {
        player.health *= 2
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
        goToClassChoice();
    }
}

function goToClassChoice() {
    removeItems("start-item");

    toggleFlexbox(displayBox, "display-box-flex-column", "display-box-flex-row")
    toggleFlexbox(buttonBox, "button-box-flex-column", "button-box-flex-row")

    classOptions.forEach(classOption => {
        const classContainer = document.createElement("div");
        classContainer.classList.add("class-display-option", "text-font", "class-item");

        const classImage = document.createElement("img");
        classImage.src = classOption.image;
        classImage.alt = classOption.name;
        classImage.classList.add("class-image")

        const classTitle = document.createElement("h3");
        classTitle.textContent = classOption.name;
        classTitle.classList.add("class-title")

        const classDescription = document.createElement("p");
        classDescription.textContent = classOption.description;
        classDescription.classList.add("class-description")

        const selectButton = document.createElement("button");
        selectButton.textContent = `Select ${classOption.name}`;
        selectButton.classList.add("class-button", "class-item");
        selectButton.addEventListener("click", () => {
            selectClass(classOption);
            goToFightSequenz("class-item");
        });

        classContainer.appendChild(classImage);
        classContainer.appendChild(classTitle);
        classContainer.appendChild(classDescription);
        buttonBox.appendChild(selectButton);

        displayBox.appendChild(classContainer);
    });
}

// Next page
function goToRewardSequenz() {

    if (displayBox.classList.contains("display-box-flex-column")) {
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column");
    }
    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }
    removeItems("fight-item");

    const randomItem = allItemsList[Math.floor(Math.random() * allItemsList.length)];
    const randomSkill = universalSkills[Math.floor(Math.random() * universalSkills.length)];

    const rewards = [{
            type: "Item",
            name: randomItem.name,
            description: randomItem.description,
            image: randomItem.image,
            rarity: randomItem.rarity
        },
        {
            type: "Skill",
            name: randomSkill.name,
            description: randomSkill.description,
            image: randomSkill.image,
            rarity: randomSkill.rarity
        },
        {
            type: "Heal",
            name: "Healing Potion",
            description: "Restore 50% of your max HP.",
            image: "./assets/images/heal-picture/heal.webp"
        }
    ];

    rewards.forEach(reward => {
        const rewardContainer = document.createElement("div");
        rewardContainer.classList.add("reward-display-option", "text-font", "reward-item");

        const rewardImage = document.createElement("img");
        rewardImage.src = reward.image;
        rewardImage.alt = reward.name;
        rewardImage.classList.add("reward-image")

        const rewardTitle = document.createElement("h3");
        rewardTitle.textContent = reward.name;
        rewardTitle.classList.add("reward-title")

        const rewardType = document.createElement("h4")
        rewardType.textContent = reward.type
        rewardType.classList.add("reward-type")

        const rewardRarity = document.createElement("h5")
        rewardRarity.textContent = reward.rarity
        rewardRarity.classList.add("reward-rarity")
        if (reward.rarity == "common") {
            rewardRarity.style.color = "grey"
        } else if (reward.rarity == "rare") {
            rewardRarity.style.color = "green"
        } else if (reward.rarity == "epic") {
            rewardRarity.style.color = "purple"
        }

        const rewardDescription = document.createElement("p");
        rewardDescription.textContent = reward.description;
        rewardDescription.classList.add("reward-description")

        rewardContainer.appendChild(rewardImage);
        rewardContainer.appendChild(rewardTitle);
        rewardContainer.appendChild(rewardType)
        rewardContainer.appendChild(rewardRarity)
        rewardContainer.appendChild(rewardDescription);

        const selectButton = document.createElement("button");
        selectButton.textContent = `Select ${reward.name}`;
        selectButton.classList.add("class-button", "reward-item");
        selectButton.addEventListener("click", () => {
            selectReward(reward), goToContinueScreen("reward-item");
        });

        displayBox.appendChild(rewardContainer);
        buttonBox.appendChild(selectButton)
    });
}

// Next page
function goToFightSequenz(hideItem) {
    removeItems(hideItem);

    const monsterImage = document.createElement("img");
    monsterImage.src = monsterOptions[roundCounter].image;
    monsterImage.alt = monsterOptions[roundCounter].name;
    monsterImage.classList.add("fight-item", "monster-image")

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
        fight(player, monster, goToRewardSequenz)
    }

}

// Next page
function goToContinueScreen() {

    removeItems("reward-item");

    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }
    if (displayBox.classList.contains("display-box-flex-row")) {
        toggleFlexbox(displayBox, "display-box-flex-column", "display-box-flex-row");
    }

    displayItems("h2", "Do you want to go to the next fight?", displayBox, "continue-screen", "continue-item");
    displayItems("button", "Continue", displayBox, "continue-screen", "continue-item", "continue-button");

    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button", "continue-item");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button", "continue-item");
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button", "continue-item");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button", "continue-item");

    addFunction("player-attribute-button", () => displayPlayerMenu("Attributes"));

    addFunction("player-skill-button", () => displayPlayerMenu("Skills", playerAvailableSkills));

    addFunction("player-item-button", () => displayPlayerMenu("Items", playerAvailableItems));

    addFunction("player-attack-pattern-button", () => displayPlayerMenu("Attack patterns", playerAvailableFightingStyle));

    addFunction("continue-button", () => {
        if (roundCounter < 10) {
            roundCounter++;
            goToFightSequenz("continue-item");
        } else {
            displayItems("h2", "Congratulations! You have completed the Game", displayBox, "game-end-message");
        }
    });

}

//Apply reset settings
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);
//Apply validate input
document.getElementById("start-button").addEventListener("click", validateInput);
//Info Button
document.getElementById("info-button").addEventListener("click", displayTutorial)