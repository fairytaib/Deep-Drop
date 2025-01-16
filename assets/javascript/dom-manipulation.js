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
    Skill,
    Item
} from "./class-list.js";

// Keep track of the current round
let roundCounter = 0;

// Decide the monster that is displayed in Round x
let monster = monsterList[roundCounter]

// Initialize variables
let playerActiveFightingStyle;
let playerActiveItem;

// Character and Monster options
const classOptions = [{
        name: "Knight",
        description: "A strong and resilient warrior, excelling in defense.",
        image: "assets/images/player-classes/knight.webp"
    },
    {
        name: "Ranger",
        description: "A swift and agile archer, skilled in ranged attacks.",
        image: "assets/images/player-classes/ranger.webp"
    },
    {
        name: "Assassin",
        description: "A deadly and elusive fighter, striking from the shadows.",
        image: "assets/images/player-classes/assassin.webp"
    }
];

const monsterOptions = [{
        name: "slime",
        image: "assets/images/monsters/slime.webp"
    },
    {
        name: "Swarm of Rats",
        image: "assets/images/monsters/swarm-of-rats.webp"
    },
    {
        name: "Kobold",
        image: "assets/images/monsters/kobold.webp"
    },
    {
        name: "Goblin",
        image: "assets/images/monsters/goblin.webp"
    },
    {
        name: "Skeleton Warrior",
        image: "assets/images/monsters/skeleton-warrior.webp"
    },
    {
        name: "Orc",
        image: "assets/images/monsters/orc.webp"
    },
    {
        name: "Harpie",
        image: "assets/images/monsters/harpie.webp"
    },
    {
        name: "Troll",
        image: "assets/images/monsters/troll.webp"
    },
    {
        name: "Fire Elemental",
        image: "assets/images/monsters/fire-elemental.webp"
    },
    {
        name: "The Boss",
        image: "assets/images/monsters/boss.webp"
    },
]

// Player Name Variable
let playerNameInput = document.getElementById("player-name-input");
let playerName = "";
let player


//---------- Initialize Display Divs

// Display Box Items
const displayBox = document.getElementById("display-box-section");
// Button Box Items
const buttonBox = document.getElementById("button-box-section");


// Reset Flexbox
function resetFlexbox(displayBox, buttonBox) {
    displayBox.className = "display-box display-box-flex-column";
    buttonBox.className = "button-box button-box-flex-column";
}


//Reset the game
function resetGame() {
    location.reload()
}

/* --------- Generic functions
 * General functions that are later used to display windows or create needed Elements
 *
 **/


function showLoadingScreenForThreeSeconds() {
    const loadingScreen = document.getElementById("loading-screen");

    loadingScreen.classList.add("active");

    setTimeout(() => {
        loadingScreen.classList.remove("active");
    }, 1000);
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

    const tutorialSteps = [{
            title: "How to play",
            text: "Your mission is to survive 10 rounds of combat, improve your character, and conquer the depths of the well."
        },
        {
            title: "Choose Your Class",
            text: "Choose one of three classes. Each class has its own strength and weaknesses"
        },
        {
            title: "Fight Monsters",
            text: "Battles are automatic. Your stats, skills and your 'Fighting Style' decide the outcome."
        },
        {
            title: "Improving Your Character",
            text: "There are different rewards you can choose from after a fight. Items that can be equiped. Skills add passive bonuses and 'Healing' wich restore health for the next fight."
        },
        {
            title: "Adjust & Continue",
            text: "Equip items and tweak your fighting style each round after you have chosen your reward"
        }
    ];

    let currentStep = 0;

    // Update tutorial content
    function updateTutorial(step) {
        title.textContent = tutorialSteps[step].title;
        tutorialText.innerText = tutorialSteps[step].text;
    }

    // Button event listeners
    rightSlideButton.addEventListener("click", () => {
        if (currentStep < tutorialSteps.length - 1) {
            currentStep++;
            updateTutorial(currentStep);
        }
    });

    leftSlideButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateTutorial(currentStep);
        }
    });

    // Initialize
    updateTutorial(currentStep);
}

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

function closeAllMenus() {
    const openMenus = document.querySelectorAll(".player-menu-display");
    openMenus.forEach(menu => menu.remove());
}

function displayPlayerStats(player) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");

    const statsList = document.createElement("ul");
    statsList.classList.add("stats-list");

    function addStat(icon, label, value) {
        const statItem = document.createElement("li");
        statItem.classList.add("stat-item");

        const statIcon = document.createElement("span");
        statIcon.innerHTML = icon;
        statIcon.classList.add("stat-icon");

        const statText = document.createElement("span");
        statText.innerText = `${label}: ${value}`;
        statText.classList.add("stat-text");

        statItem.appendChild(statIcon);
        statItem.appendChild(statText);
        statsList.appendChild(statItem);
    }

    addStat("\u2764", "HP", Math.floor(player.health));
    addStat("\u2694", "ATK", Math.floor(player.damage));
    addStat("\u26E8", "DEF", Math.floor(player.defense));
    addStat("\u2699", "ATK.SPD", `${(player.attackSpeed / 1000).toFixed(2)} per Second`);
    addStat("\u26A1", "C.RATE", `${Math.floor(player.critChance)}%`);
    addStat("\uD83D\uDCA8", "DODGE CHANCE", `${Math.floor(player.dodgeChance)}%`);


    statsContainer.appendChild(statsList);

    const menuContainer = document.querySelector(".player-menu-display");
    menuContainer.appendChild(statsContainer);
}

function displayPlayerMenu(menuTitle, itemContent) {
    closeAllMenus()

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("player-menu-display");

    const title = document.createElement("h2");
    title.textContent = menuTitle;
    menuContainer.appendChild(title);

    const closeButton = createCloseButton();
    menuContainer.appendChild(closeButton);

    displayBox.appendChild(menuContainer);

    displayPLayerMenuItems(itemContent, menuContainer)

}

function displayPlayerMenuAttributes(menuTitle) {
    closeAllMenus()

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("player-menu-display");

    const title = document.createElement("h2");
    title.textContent = menuTitle;
    menuContainer.appendChild(title);

    const closeButton = createCloseButton();
    menuContainer.appendChild(closeButton);

    displayBox.appendChild(menuContainer);

    displayPlayerStats(player)
}


function displayPLayerMenuItems(itemContent, appendBox) {
    if (itemContent.length === 0) {
        const text = document.createElement("p");
        text.innerText = "You don't have anything in here yet";
        text.classList.add("player-menu-text");
        appendBox.appendChild(text);
    } else {
        if (Array.isArray(itemContent) && itemContent === playerAvailableFightingStyle) {
            const currentItemDiv = document.createElement("div");

            const currentItem = document.createElement("h3");
            currentItem.classList.add("player-menu-item", "text-font");
            currentItem.innerText = "Current Style:";
            appendBox.appendChild(currentItemDiv);
            currentItemDiv.appendChild(currentItem);

            if (itemContent === playerAvailableFightingStyle) {
                const activeStyle = document.createElement("p");
                activeStyle.id = "active-style";
                activeStyle.classList.add("text-font");
                if (playerActiveFightingStyle && playerActiveFightingStyle.name) {
                    activeStyle.innerText = playerActiveFightingStyle.name;
                } else {
                    activeStyle.innerText = "None"
                }
                currentItemDiv.appendChild(activeStyle);
            }
            let stylesContainer = document.createElement("div")
            stylesContainer.classList.add("fighting-styles-container")
            appendBox.appendChild(stylesContainer)
        }

        if (Array.isArray(itemContent) && itemContent === playerAvailableItems) {
            const currentItemDiv = document.createElement("div");

            const currentItem = document.createElement("h3");
            currentItem.classList.add("player-menu-item", "text-font");
            currentItem.innerText = "Current Item:";
            appendBox.appendChild(currentItemDiv);
            currentItemDiv.appendChild(currentItem);

            const activeStyle = document.createElement("p");
            activeStyle.id = "active-style";
            activeStyle.classList.add("text-font");
            if (playerActiveItem && playerActiveItem.name) {
                activeStyle.innerText = playerActiveItem.name;
            } else {
                activeStyle.innerText = "None"
            }
            currentItemDiv.appendChild(activeStyle);
        }
    }
    itemContent.forEach(item => {
        let stylesContainer = document.querySelector(".fighting-styles-container")

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("player-menu-display-option", "text-font");

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.name;
        itemTitle.classList.add("player-menu-item");
        itemTitle.setAttribute("data-tooltip", item.description);

        if (!stylesContainer) {
            stylesContainer = document.createElement("div");
            stylesContainer.classList.add("fighting-styles-container");
            appendBox.appendChild(stylesContainer);
        }
        stylesContainer.appendChild(itemContainer)
        itemContainer.appendChild(itemTitle)


        if (itemContent === playerAvailableItems) {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select`;
            selectButton.classList.add("reward-button", "player-inner-menu-button");
            selectButton.addEventListener("click", () => {
                if (playerActiveItem) {
                    playerActiveItem.resetEffect(player)
                }
                playerActiveItem = item
                playerActiveItem.applyEffect(player)

                const activeStyleElement = document.getElementById("active-style");
                activeStyleElement.innerText = playerActiveItem.name

            });
            itemContainer.appendChild(selectButton);
        } else if (itemContent === playerAvailableFightingStyle) {


            const selectButton = document.createElement("button");
            selectButton.textContent = `Select`;
            selectButton.classList.add("reward-button", "player-inner-menu-button");
            selectButton.addEventListener("click", () => {
                activateFightingStyle(item)
                const allFightingStyleDivs = document.querySelectorAll(".active-fighting-style-display");
                allFightingStyleDivs.forEach(div => div.classList.remove("active-fighting-style-display"));
                itemTitle.classList.add("active-fighting-style-display");

                const activeStyleElement = document.getElementById("active-style");

                activeStyleElement.innerText = playerActiveFightingStyle.name


            });
            itemContainer.appendChild(selectButton);
        }

        if (itemContent === playerAvailableFightingStyle) {
            itemContainer.classList.add("fighting-styles-divs");

        }
    });
}

function activateFightingStyle(style) {
    if (playerActiveFightingStyle) {
        resetFightingStyleEffects(playerActiveFightingStyle);
    }

    // Aktuellen Style speichern und Effekte anwenden
    playerActiveFightingStyle = style;
    style.effect(player);
    return playerActiveFightingStyle
}

function resetFightingStyleEffects(style) {
    if (!style) return;

    // Effekte umkehren (angenommen, die Effekte sind linear)
    if (style.name === "Aggressive Attacker") {
        player.attackSpeed /= 1.15; // Rückgängig machen
        player.defense /= 0.8;
    } else if (style.name === "Defensive Tank") {
        player.defense /= 1.3;
        player.attackSpeed /= 0.75;
    } else if (style.name === "Critical Fighter") {
        player.critChance /= 1.5;
        player.attackSpeed /= 0.8;

    } else if (style.name === "Skillful Dodger") {
        player.dodgeChance /= 1.2;
        player.damage /= 0.85;
    } else if (style.name === "None") {
        player.maxHealth /= 1
    }
}

function selectClass(classOption) {
    if (classOption.name === "Knight") {
        player = new Character("Knight", 100, 100, 10, 1500, 15, 5, 10);
        for (let i = 0; i < knightSkills.length; i++) {
            universalSkills.push(knightSkills[i]);
        }
    } else if (classOption.name === "Ranger") {
        player = new Character("Ranger", 70, 70, 12, 1200, 10, 10, 15);
        for (let i = 0; i < rangerSkills.length; i++) {
            universalSkills.push(rangerSkills[i]);
        }
    } else if (classOption.name === "Assassin") {
        player = new Character("Assassin", 50, 50, 15, 1000, 5, 15, 20);
        for (let i = 0; i < assassinSkills.length; i++) {
            universalSkills.push(assassinSkills[i]);
        }
    }
}

function selectReward(reward, player) {
    if (reward.type === "item") {
        playerAvailableItems.push(reward);
    } else if (reward.type === "skill") {
        // Füge den Skill zur Liste der aktiven Skills hinzu
        playerAvailableSkills.push(reward);
        playerAvailableSkills.forEach(skill => {
            if (skill.type == 'skill') {
                skill.applyEffect(player, monster);
            }
        });
    } else if (reward.type === "Heal") {
        player.health *= 2
    }
}

// Input validation - First Page
function validateInput() {
    const pattern = /^[a-zA-Z0-9]+$/;

    if (playerNameInput.value.length <= 2) {
        playerNameInput.value = ""
        playerNameInput.placeholder = "Your Name is too short"
    } else if (!pattern.test(playerNameInput.value)) {
        playerNameInput.value = ""
        playerNameInput.placeholder = "Invalid signs used"
    } else if (playerNameInput.value.length >= 20) {
        playerNameInput.value = ""
        playerNameInput.placeholder = "Your Name is too long"
    } else {
        playerName = playerNameInput.value;
        goToClassChoice();
    }
}

function goToClassChoice() {
    showLoadingScreenForThreeSeconds()
    removeItems("start-item");

    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column")

    const titleBox = document.createElement("div")
    titleBox.classList.add("class-title-box", "class-item")
    displayBox.appendChild(titleBox);

    const itemBox = document.createElement("div")
    itemBox.classList.add("class-item-box", "class-item")
    displayBox.appendChild(itemBox)


    const titleText = document.createElement("h3")
    titleText.classList.add("title-font")
    titleText.innerText = "Choose your Hero"
    titleBox.appendChild(titleText)

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
        setTimeout(() => {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select ${classOption.name}`;
            selectButton.classList.add("class-button", "class-item");
            selectButton.addEventListener("click", () => {
                selectClass(classOption);
                goToFightSequenz("class-item");
            });
            buttonBox.appendChild(selectButton);
        }, 1000)


        classContainer.appendChild(classImage);
        classContainer.appendChild(classTitle);
        classContainer.appendChild(classDescription);


        itemBox.appendChild(classContainer)
    });
}

// Next page
function goToRewardSequenz() {
    showLoadingScreenForThreeSeconds()

    if (displayBox.classList.contains("display-box-flex-row")) {
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column");
    }
    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    displayBox.classList.add("reward-display")

    removeItems("fight-item");

    const rewardSequenzTitle = document.createElement("h3")
    rewardSequenzTitle.classList.add("title-font", "reward-item")
    rewardSequenzTitle.innerText = "Choose your reward"
    displayBox.appendChild(rewardSequenzTitle)

    const rewardItemDiv = document.createElement("div");
    rewardItemDiv.classList.add("reward-item")
    rewardItemDiv.id = "reward-container"
    displayBox.appendChild(rewardItemDiv)


    const randomItemIndex = Math.floor(Math.random() * allItemsList.length);
    const randomItem = allItemsList[randomItemIndex];
    allItemsList.splice(randomItemIndex, 1);

    const randomSkillIndex = Math.floor(Math.random() * universalSkills.length);
    const randomSkill = universalSkills[randomSkillIndex];
    universalSkills.splice(randomSkillIndex, 1);

    const rewards = [
        new Item(randomItem.type, randomItem.name, randomItem.description, randomItem.rarity, randomItem.effect, randomItem.image),
        new Skill(randomSkill.type, randomSkill.name, randomSkill.description, randomSkill.rarity, randomSkill.effect, randomSkill.image, randomSkill.triggerCondition),
        {
            type: "Heal",
            name: "Healing Potion",
            description: "Double your current HP.",
            image: "assets/images/heal-picture/heal.webp"
        }
    ];

    rewards.forEach(reward => {

        const rewardContainer = document.createElement("div");
        rewardContainer.classList.add("reward-display-option", "text-font", "reward-item");

        rewardItemDiv.appendChild(rewardContainer)

        const rewardImage = document.createElement("img");
        rewardImage.src = reward.image;
        rewardImage.alt = reward.name;
        rewardImage.classList.add("reward-image")
        rewardContainer.appendChild(rewardImage);

        const rewardTitle = document.createElement("h3");
        rewardTitle.textContent = reward.name;
        rewardTitle.classList.add("reward-title")
        rewardContainer.appendChild(rewardTitle);

        const rewardType = document.createElement("h4")
        rewardType.textContent = reward.type
        rewardType.classList.add("reward-type")
        rewardContainer.appendChild(rewardType)

        if (reward.rarity) {
            const rewardRarity = document.createElement("h5")
            rewardRarity.textContent = reward.rarity
            rewardRarity.classList.add("reward-rarity")
            if (reward.rarity == "common") {
                rewardRarity.style.color = "#ffffff"
            } else if (reward.rarity == "rare") {
                rewardRarity.style.color = "#01c801"
            } else if (reward.rarity == "epic") {
                rewardRarity.style.color = "#ed03ed"
            }
            rewardContainer.appendChild(rewardRarity)
        }

        const rewardDescription = document.createElement("p");
        rewardDescription.textContent = reward.description;
        rewardDescription.classList.add("reward-description")
        rewardContainer.appendChild(rewardDescription);

        setTimeout(() => {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select ${reward.type}`;
            selectButton.classList.add("class-button", "reward-item");
            selectButton.addEventListener("click", () => {
                selectReward(reward, player), goToContinueScreen("reward-item");
                displayBox.classList.remove("reward-display")
            });

            buttonBox.appendChild(selectButton)
        }, 1000)

    });
}


// Next page
function goToFightSequenz(hideItem) {
    removeItems(hideItem);

    showLoadingScreenForThreeSeconds()

    const roundCounterDisplay = document.createElement("h3")
    roundCounterDisplay.classList.add("title-font", "fight-item")
    roundCounterDisplay.innerHTML = `Round: ${roundCounter+1}`
    displayBox.appendChild(roundCounterDisplay)

    const monsterImage = document.createElement("img");
    monsterImage.src = monsterOptions[roundCounter].image;
    monsterImage.alt = monsterOptions[roundCounter].name;
    monsterImage.classList.add("fight-item", "monster-image")
    displayBox.appendChild(monsterImage)
    if (buttonBox.classList.contains("button-box-flex-row")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    setTimeout(() => {
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
    }, 1000);

    if (roundCounter < 10) {
        setTimeout(() => {
            fight(player, monster, goToRewardSequenz, goToLosingScreen)
        }, 1500)

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

    displayItems("h2", "If you are ready start the next fight", displayBox, "continue-screen", "continue-item");

    displayItems("button", "Start next fight", displayBox, "continue-screen", "continue-item", "continue-button");

    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button", "continue-item");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button", "continue-item");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button", "continue-item");
    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button", "continue-item");

    addFunction("player-attribute-button", () => displayPlayerMenuAttributes("Attributes"));

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

//Last Page

function goToLosingScreen() {
    displayBox.innerHTML = ""
    buttonBox.innerHTML = ""

    const losingText = document.createElement("h2")
    losingText.classList.add("title-font", "end-item")
    losingText.innerText = "You lost. Better luck next time!"
    displayBox.appendChild(losingText)

    const resetButton = document.createElement("button")
    resetButton.classList.add("text-font", "end-item")
    resetButton.innerText = "Restart the game?"
    resetButton.addEventListener("click", () => {
        location.reload()
    })
    displayBox.appendChild(resetButton)
}

//Apply reset settings
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);
//Apply validate input
document.getElementById("start-button").addEventListener("click", validateInput);
//Info Button
document.getElementById("info-button").addEventListener("click", displayTutorial)