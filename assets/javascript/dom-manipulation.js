// Import Class list
import {
    Character,
    monsterList,
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
} from "./class-list.js"; // Importing various classes, lists, and utilities from an external module

// Keep track of the current round
let roundCounter = 0; // Counter for the current game round

// Decide the monster that is displayed in Round x
let monster = monsterList[roundCounter]; // Selecting the monster based on the round counter

// Initialize variables
let playerActiveFightingStyle; // Stores the active fighting style of the player
let playerActiveItem; // Stores the currently active item of the player

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
]; // Array of player character class options with descriptions and images

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
    }
]; // Array of monster options with names and associated images

// Player Name Variable
let playerNameInput = document.getElementById("player-name-input"); // Input element for player name
let playerName = ""; // Stores the player's name
let player; // Placeholder for the player character object

//---------- Initialize Display Divs ----------

// Display Box Items
const displayBox = document.getElementById("display-box-section"); // Div where game details are displayed

// Button Box Items
const buttonBox = document.getElementById("button-box-section"); // Div for displaying interactive buttons
// Reset the game
function resetGame() {
    location.reload(); // Reloads the current page to reset the game
}

/* --------- Generic functions ---------
 * General functions that are later used to display windows or create needed elements
 */

// Show a loading screen for 3 seconds
function showLoadingScreenForThreeSeconds() {
    const loadingScreen = document.getElementById("loading-screen");

    loadingScreen.classList.add("active"); // Activate the loading screen

    setTimeout(() => {
        loadingScreen.classList.remove("active"); // Deactivate after 3 seconds
    }, 1000);
}

// Display a confirmation window for user choice
function displayUserChoiceConfirmation() {
    const confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirm-window"); // Add a CSS class for styling

    confirmWindow.textContent = "Are you sure you want to proceed?"; // Confirmation message

    const yesButton = document.createElement("button");
    yesButton.classList.add("yes-reset-button");
    yesButton.textContent = "Yes"; // "Yes" button text
    yesButton.addEventListener("click", () => {
        confirmWindow.remove(); // Remove the confirmation window
        resetGame(); // Reset the game
    });

    const noButton = document.createElement("button");
    noButton.classList.add("no-reset-button");
    noButton.textContent = "No"; // "No" button text
    noButton.addEventListener("click", () => confirmWindow.remove()); // Close the confirmation window

    confirmWindow.appendChild(yesButton); // Add "Yes" button to the window
    confirmWindow.appendChild(noButton); // Add "No" button to the window

    displayBox.appendChild(confirmWindow); // Display the confirmation window
}

// Display a tutorial window
function displayTutorial() {
    const tutorialContainer = document.createElement("div");
    tutorialContainer.classList.add("tutorial-window"); // Add a CSS class for the tutorial window

    const title = document.createElement("h2");
    title.textContent = "How to play"; // Tutorial title

    const tutorialText = document.createElement("p");
    tutorialText.innerText = "Your mission is to survive 10 rounds of combat, improve your character, and conquer the depths of the well.";
    tutorialText.classList.add("tutorial-text"); // Add a CSS class for the tutorial text

    const closeButton = createCloseButton(); // Create a close button

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("next-slide-button-box"); // Add a container for navigation buttons

    const rightSlideButton = document.createElement("button");
    rightSlideButton.innerHTML = "<i class='bx bx-chevron-right' ></i>"; // Add an icon for the right button
    rightSlideButton.classList.add("next-slide-button");

    const leftSlideButton = document.createElement("button");
    leftSlideButton.innerHTML = "<i class='bx bx-chevron-left' ></i>"; // Add an icon for the left button
    leftSlideButton.classList.add("next-slide-button");

    // Append elements to the tutorial container
    displayBox.appendChild(tutorialContainer);
    tutorialContainer.appendChild(closeButton);
    tutorialContainer.appendChild(title);
    tutorialContainer.appendChild(tutorialText);
    tutorialContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(leftSlideButton);
    buttonContainer.appendChild(rightSlideButton);

    const tutorialSteps = [{
            title: "How to play",
            text: "Your mission is to survive 10 rounds of combat, improve your character, and conquer the depths of the well."
        },
        {
            title: "Choose Your Class",
            text: "Choose one of three classes. Each class has its own strengths and weaknesses. The Knight has high defense but low attack power. The Assassin excels in damage but is quite weak to attacks. The Ranger is a combination of both."
        },
        {
            title: "Fight Monsters",
            text: "Battles are automatic. Your stats, skills, and your 'Fighting Style' decide the outcome."
        },
        {
            title: "Improving Your Character",
            text: "There are different rewards you can choose from after a fight. Items can be equipped. Skills add passive bonuses, and 'Healing' restores health for the next fight. There is also the possibility to apply a fighting style."
        },
        {
            title: "Adjust & Continue",
            text: "Equip items and tweak your fighting style each round after you have chosen your reward. Items are not automatically equipped when selected!"
        }
    ]; // Tutorial steps with titles and descriptions

    let currentStep = 0; // Track the current tutorial step

    // Update tutorial content
    function updateTutorial(step) {
        title.textContent = tutorialSteps[step].title; // Update title based on step
        tutorialText.innerText = tutorialSteps[step].text; // Update text based on step
    }

    // Event listener for the right button
    rightSlideButton.addEventListener("click", () => {
        if (currentStep < tutorialSteps.length - 1) {
            currentStep++;
            updateTutorial(currentStep);
        }
    });

    // Event listener for the left button
    leftSlideButton.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateTutorial(currentStep);
        }
    });

    // Initialize the tutorial with the first step
    updateTutorial(currentStep);
}
// Toggle Flexbox display for a given window
function toggleFlexbox(displayWindow, toggleType, detoggleType) {
    displayWindow.classList.toggle(toggleType); // Add or remove the toggleType class
    displayWindow.classList.toggle(detoggleType); // Add or remove the detoggleType class
}

// Create and display items dynamically
function displayItems(tagType, innerText, displayPlace, ...classAttribute) {
    const displayedItem = document.createElement(tagType); // Create an HTML element
    displayedItem.classList.add(...classAttribute); // Add specified classes
    displayedItem.innerText = innerText; // Set the text content
    displayPlace.appendChild(displayedItem); // Append the element to the given display place
}

// Remove all elements of a specific class
function removeItems(classItem) {
    const removableItems = document.getElementsByClassName(classItem); // Select all elements with the specified class
    while (removableItems.length > 0) {
        removableItems[0].remove(); // Remove the first element in the list until all are gone
    }
}

// Add multiple functions to all elements of a target class
function addFunction(targetClass, ...targetFunctions) {
    const targetedItems = document.getElementsByClassName(targetClass); // Select elements with the target class
    for (let item = 0; item < targetedItems.length; item++) {
        targetedItems[item].addEventListener("click", () => {
            targetFunctions.forEach(func => func()); // Execute each function when clicked
        });
    }
}

// Create a reusable close button
function createCloseButton() {
    const closeButton = document.createElement("button"); // Create a button element
    closeButton.textContent = "X"; // Set the button text
    closeButton.classList.add("close-button"); // Add a CSS class for styling
    closeButton.addEventListener("click", () => closeButton.parentElement.remove()); // Remove the parent element on click
    return closeButton; // Return the close button
}

// Close all open menus
function closeAllMenus() {
    const openMenus = document.querySelectorAll(".player-menu-display"); // Select all open menus
    openMenus.forEach(menu => menu.remove()); // Remove each menu
}

// Display player statistics in a menu
function displayPlayerStats(player) {
    const statsContainer = document.createElement("div"); // Create a container for stats
    statsContainer.classList.add("stats-container"); // Add a CSS class

    const statsList = document.createElement("ul"); // Create a list for stats
    statsList.classList.add("stats-list"); // Add a CSS class

    // Helper function to add a stat to the list
    function addStat(icon, label, value) {
        const statItem = document.createElement("li"); // Create a list item
        statItem.classList.add("stat-item"); // Add a CSS class

        const statIcon = document.createElement("span"); // Create a span for the icon
        statIcon.innerHTML = icon; // Set the icon
        statIcon.classList.add("stat-icon"); // Add a CSS class

        const statText = document.createElement("span"); // Create a span for the text
        statText.innerText = `${label}: ${value}`; // Set the label and value
        statText.classList.add("stat-text"); // Add a CSS class

        statItem.appendChild(statIcon); // Append the icon to the list item
        statItem.appendChild(statText); // Append the text to the list item
        statsList.appendChild(statItem); // Append the list item to the stats list
    }

    // Add player stats to the list
    addStat("\u2764", "HP", Math.floor(player.health)); // Health
    addStat("\u2694", "ATK", Math.floor(player.damage)); // Attack power
    addStat("\u26E8", "DEF", Math.floor(player.defense)); // Defense
    addStat("\u2699", "ATK.SPD", `${(player.attackSpeed / 1000).toFixed(2)} per Second`); // Attack speed
    addStat("\u26A1", "C.RATE", `${Math.floor(player.critChance)}%`); // Critical hit chance
    addStat("\uD83D\uDCA8", "DODGE CHANCE", `${Math.floor(player.dodgeChance)}%`); // Dodge chance

    statsContainer.appendChild(statsList); // Append the stats list to the container

    const menuContainer = document.querySelector(".player-menu-display"); // Select the menu container
    menuContainer.appendChild(statsContainer); // Append the stats container to the menu
}

// Display the player's menu with a title and content
function displayPlayerMenu(menuTitle, itemContent) {
    closeAllMenus(); // Close any open menus

    const menuContainer = document.createElement("div"); // Create a menu container
    menuContainer.classList.add("player-menu-display"); // Add a CSS class

    const title = document.createElement("h2"); // Create a title element
    title.textContent = menuTitle; // Set the menu title
    menuContainer.appendChild(title); // Append the title to the menu container

    const closeButton = createCloseButton(); // Create a close button
    menuContainer.appendChild(closeButton); // Append the close button to the menu container

    displayBox.appendChild(menuContainer); // Append the menu container to the display box

    displayPLayerMenuItems(itemContent, menuContainer); // Display the menu items
}
// Display player menu for attributes
function displayPlayerMenuAttributes(menuTitle) {
    closeAllMenus(); // Close any open menus

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("player-menu-display"); // Add a class for styling

    const title = document.createElement("h2");
    title.textContent = menuTitle; // Set the menu title
    menuContainer.appendChild(title); // Append the title to the menu container

    const closeButton = createCloseButton(); // Create a close button
    menuContainer.appendChild(closeButton); // Append the close button to the menu container

    displayBox.appendChild(menuContainer); // Add the menu container to the display box

    displayPlayerStats(player); // Display the player's stats
}

// Display items in the player menu
function displayPLayerMenuItems(itemContent, appendBox) {
    if (itemContent.length === 0) {
        const text = document.createElement("p");
        text.innerText = "You don't have anything in here yet."; // Message when no items are available
        text.classList.add("player-menu-text");
        appendBox.appendChild(text); // Add the message to the menu
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
                    activeStyle.innerText = playerActiveFightingStyle.name; // Display current fighting style
                } else {
                    activeStyle.innerText = "None";
                }
                currentItemDiv.appendChild(activeStyle);
            }

            let stylesContainer = document.createElement("div");
            stylesContainer.classList.add("fighting-styles-container");
            appendBox.appendChild(stylesContainer);
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
                activeStyle.innerText = playerActiveItem.name; // Display current item
            } else {
                activeStyle.innerText = "None";
            }
            currentItemDiv.appendChild(activeStyle);
        }
    }

    // Loop through each item in the content array
    itemContent.forEach(item => {
        let stylesContainer = document.querySelector(".fighting-styles-container");

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("player-menu-display-option", "text-font");

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.name; // Set the item name
        itemTitle.classList.add("player-menu-item");
        itemTitle.setAttribute("data-tooltip", item.description); // Add a tooltip with the item description

        if (!stylesContainer) {
            stylesContainer = document.createElement("div");
            stylesContainer.classList.add("fighting-styles-container");
            appendBox.appendChild(stylesContainer);
        }
        stylesContainer.appendChild(itemContainer);
        itemContainer.appendChild(itemTitle);

        if (itemContent === playerAvailableItems) {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select`; // Button to select the item
            selectButton.classList.add("reward-button", "player-inner-menu-button");
            selectButton.addEventListener("click", () => {
                if (playerActiveItem) {
                    playerActiveItem.resetEffect(player); // Reset the effect of the current item
                }
                playerActiveItem = item;
                playerActiveItem.applyEffect(player); // Apply the new item's effect

                const activeStyleElement = document.getElementById("active-style");
                activeStyleElement.innerText = playerActiveItem.name; // Update the active item display
            });
            itemContainer.appendChild(selectButton);
        } else if (itemContent === playerAvailableFightingStyle) {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select`; // Button to select the fighting style
            selectButton.classList.add("reward-button", "player-inner-menu-button");
            selectButton.addEventListener("click", () => {
                activateFightingStyle(item); // Activate the selected fighting style
                const allFightingStyleDivs = document.querySelectorAll(".active-fighting-style-display");
                allFightingStyleDivs.forEach(div => div.classList.remove("active-fighting-style-display"));
                itemTitle.classList.add("active-fighting-style-display");

                const activeStyleElement = document.getElementById("active-style");
                activeStyleElement.innerText = playerActiveFightingStyle.name; // Update the active fighting style display
            });
            itemContainer.appendChild(selectButton);
        }

        if (itemContent === playerAvailableFightingStyle) {
            itemContainer.classList.add("fighting-styles-divs"); // Add a specific class for fighting styles
        }
    });
}
// Activate the selected fighting style
function activateFightingStyle(style) {
    if (playerActiveFightingStyle) {
        resetFightingStyleEffects(playerActiveFightingStyle); // Reset the effects of the current style
    }

    // Save the current style and apply its effects
    playerActiveFightingStyle = style;
    style.effect(player);
    return playerActiveFightingStyle;
}

// Reset the effects of a fighting style
function resetFightingStyleEffects(style) {
    if (!style) return;

    // Reverse the effects (assuming the effects are linear)
    if (style.name === "Aggressive Attacker") {
        player.attackSpeed /= 1.15; // Revert attack speed
        player.defense /= 0.8; // Revert defense
    } else if (style.name === "Defensive Tank") {
        player.defense /= 1.3; // Revert defense
        player.attackSpeed /= 0.75; // Revert attack speed
    } else if (style.name === "Critical Fighter") {
        player.critChance /= 1.5; // Revert critical chance
        player.attackSpeed /= 0.8; // Revert attack speed
    } else if (style.name === "Skillful Dodger") {
        player.dodgeChance /= 1.2; // Revert dodge chance
        player.damage /= 0.85; // Revert damage
    } else if (style.name === "None") {
        player.maxHealth /= 1; // No effect to revert
    }
}

// Select the player class and initialize stats and skills
function selectClass(classOption) {
    if (classOption.name === "Knight") {
        player = new Character("Knight", 100, 100, 10, 1500, 15, 5, 10); // Knight stats
        knightSkills.forEach(skill => universalSkills.push(skill)); // Add Knight skills
    } else if (classOption.name === "Ranger") {
        player = new Character("Ranger", 70, 70, 12, 1200, 10, 10, 15); // Ranger stats
        rangerSkills.forEach(skill => universalSkills.push(skill)); // Add Ranger skills
    } else if (classOption.name === "Assassin") {
        player = new Character("Assassin", 50, 50, 15, 1000, 5, 15, 20); // Assassin stats
        assassinSkills.forEach(skill => universalSkills.push(skill)); // Add Assassin skills
    }
}

// Select and apply a reward to the player
function selectReward(reward, player) {
    if (reward.type === "item") {
        playerAvailableItems.push(reward); // Add item to available items

        // Remove the item from the global list
        const itemIndex = allItemsList.findIndex(item => item.name === reward.name);
        if (itemIndex !== -1) {
            allItemsList.splice(itemIndex, 1);
        }
    } else if (reward.type === "skill") {
        playerAvailableSkills.push(reward); // Add skill to available skills

        // Remove the skill from the global list
        const skillIndex = universalSkills.findIndex(skill => skill.name === reward.name);
        if (skillIndex !== -1) {
            universalSkills.splice(skillIndex, 1);
        }

        // Apply the skill's effect to the player
        playerAvailableSkills.forEach(skill => {
            if (skill.type === "skill" && typeof skill.applyEffect === "function") {
                skill.applyEffect(player, monster);
            }
        });
    } else if (reward.type === "Heal") {
        player.health *= 2; // Double the player's health
    }
}

// Validate player input on the first page
function validateInput() {
    const pattern = /^[a-zA-Z0-9]+$/; // Allow only alphanumeric characters

    if (playerNameInput.value.length <= 2) {
        playerNameInput.value = "";
        playerNameInput.placeholder = "Your Name is too short"; // Error message
        playerNameInput.style.setProperty("--placeholder-color", "red"); // Red placeholder
    } else if (!pattern.test(playerNameInput.value)) {
        playerNameInput.value = "";
        playerNameInput.placeholder = "Invalid signs used"; // Error message for invalid characters
        playerNameInput.style.setProperty("--placeholder-color", "red");
    } else if (playerNameInput.value.length >= 20) {
        playerNameInput.value = "";
        playerNameInput.placeholder = "Your Name is too long"; // Error message for long names
        playerNameInput.style.setProperty("--placeholder-color", "red");
    } else {
        playerName = playerNameInput.value; // Set the player's name

        const restartButton = document.getElementById("restart-button");
        restartButton.classList.remove("hidden"); // Show the restart button

        const outerBoxTitle = document.getElementById("title-display");
        outerBoxTitle.classList.add("hidden"); // Hide the title display

        const tutorialInfoButton = document.getElementById("information-icon");
        tutorialInfoButton.classList.remove("hidden"); // Show the tutorial info button

        goToClassChoice(); // Proceed to class choice
    }
}
// Navigate to the class choice screen
function goToClassChoice() {
    showLoadingScreenForThreeSeconds(); // Display a loading screen for 3 seconds
    removeItems("start-item"); // Remove items with the "start-item" class

    // Toggle button box layout to a row layout
    toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");

    // Create a container for the title
    const titleBox = document.createElement("div");
    titleBox.classList.add("class-title-box", "class-item"); // Add CSS classes
    displayBox.appendChild(titleBox); // Append the title container to the display box

    // Create a container for the class options
    const itemBox = document.createElement("div");
    itemBox.classList.add("class-item-box", "class-item"); // Add CSS classes
    displayBox.appendChild(itemBox); // Append the item container to the display box

    // Add title text
    const titleText = document.createElement("h3");
    titleText.classList.add("title-font"); // Add CSS class for styling
    titleText.innerText = "Choose your Hero"; // Set the title text
    titleBox.appendChild(titleText); // Append the title text to the title box

    // Iterate over each class option and create its display
    classOptions.forEach(classOption => {
        const classContainer = document.createElement("div");
        classContainer.classList.add("class-display-option", "text-font", "class-item"); // Add CSS classes

        // Create and configure the class image
        const classImage = document.createElement("img");
        classImage.src = classOption.image; // Set the image source
        classImage.alt = classOption.name; // Set the alternative text
        classImage.classList.add("class-image"); // Add a CSS class

        // Create and configure the class title
        const classTitle = document.createElement("h3");
        classTitle.textContent = classOption.name; // Set the class name
        classTitle.classList.add("class-title"); // Add a CSS class

        // Create and configure the class description
        const classDescription = document.createElement("p");
        classDescription.textContent = classOption.description; // Set the class description
        classDescription.classList.add("class-description"); // Add a CSS class

        // Create and configure the select button with a delay
        setTimeout(() => {
            const selectButton = document.createElement("button");
            selectButton.textContent = `Select ${classOption.name}`; // Set the button text
            selectButton.classList.add("class-button", "class-item"); // Add CSS classes
            selectButton.addEventListener("click", () => {
                selectClass(classOption); // Call selectClass with the selected option
                goToFightSequenz("class-item"); // Navigate to the fight sequence
            });
            buttonBox.appendChild(selectButton); // Append the button to the button box
        }, 1000);

        // Append the elements to the class container
        classContainer.appendChild(classImage);
        classContainer.appendChild(classTitle);
        classContainer.appendChild(classDescription);

        // Append the class container to the item box
        itemBox.appendChild(classContainer);
    });
}
// Navigate to the reward sequence
function goToRewardSequenz() {
    showLoadingScreenForThreeSeconds(); // Display a loading screen for 3 seconds

    // Adjust display box and button box layout if necessary
    if (displayBox.classList.contains("display-box-flex-row")) {
        toggleFlexbox(displayBox, "display-box-flex-row", "display-box-flex-column");
    }
    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    displayBox.classList.add("reward-display"); // Add a class for reward display styling
    removeItems("fight-item"); // Remove fight-related items from the display box

    // Add the reward sequence title
    const rewardSequenzTitle = document.createElement("h3");
    rewardSequenzTitle.classList.add("title-font", "reward-item");
    rewardSequenzTitle.innerText = "Choose your reward";
    displayBox.appendChild(rewardSequenzTitle);

    // Create a container for rewards
    const rewardItemDiv = document.createElement("div");
    rewardItemDiv.classList.add("reward-item");
    rewardItemDiv.id = "reward-container";
    displayBox.appendChild(rewardItemDiv);

    // Generate random rewards
    const randomItemIndex = Math.floor(Math.random() * allItemsList.length);
    const randomItem = allItemsList[randomItemIndex];
    allItemsList.splice(randomItemIndex, 1); // Remove the selected item from the list

    const randomSkillIndex = Math.floor(Math.random() * universalSkills.length);
    const randomSkill = universalSkills[randomSkillIndex];

    // Check if no skills are available
    if (universalSkills.length === 0) {
        const rewards = [
            new Item(randomItem.type, randomItem.name, randomItem.description, randomItem.rarity, randomItem.effect, randomItem.image),
            {
                type: "Empty Chest",
                name: "Empty Chest",
                description: "There are no skills available anymore. Choose a different reward.",
                image: "assets/images/filler-images/empty-chest.webp"
            },
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
            rewardItemDiv.appendChild(rewardContainer);

            // Add reward image
            const rewardImage = document.createElement("img");
            rewardImage.src = reward.image;
            rewardImage.alt = reward.name;
            rewardImage.classList.add("reward-image");
            rewardContainer.appendChild(rewardImage);

            // Add reward title
            const rewardTitle = document.createElement("h3");
            rewardTitle.textContent = reward.name;
            rewardTitle.classList.add("reward-title");
            rewardContainer.appendChild(rewardTitle);

            // Add reward type
            const rewardType = document.createElement("h4");
            rewardType.textContent = reward.type;
            rewardType.classList.add("reward-type");
            rewardContainer.appendChild(rewardType);

            // Add reward rarity if available
            if (reward.rarity) {
                const rewardRarity = document.createElement("h5");
                rewardRarity.textContent = reward.rarity;
                rewardRarity.classList.add("reward-rarity");
                rewardRarity.style.color = reward.rarity === "common" ? "#ffffff" : reward.rarity === "rare" ? "#01c801" : "#ed03ed";
                rewardContainer.appendChild(rewardRarity);
            }

            // Add reward description
            const rewardDescription = document.createElement("p");
            rewardDescription.textContent = reward.description;
            rewardDescription.classList.add("reward-description");
            rewardContainer.appendChild(rewardDescription);

            // Create the select button with a delay
            setTimeout(() => {
                const selectButton = document.createElement("button");
                selectButton.textContent = `Select ${reward.type}`;
                selectButton.classList.add("class-button", "reward-item");

                if (reward.name === "Empty Chest") {
                    selectButton.classList.add("hidden");
                } else {
                    selectButton.addEventListener("click", () => {
                        selectReward(reward, player); // Apply the selected reward
                        goToContinueScreen("reward-item"); // Navigate to the continue screen
                        displayBox.classList.remove("reward-display"); // Remove reward display class
                    });
                }

                buttonBox.appendChild(selectButton); // Append the button to the button box
            }, 1000);
        });
    } else {
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
            rewardItemDiv.appendChild(rewardContainer);

            // Add reward image
            const rewardImage = document.createElement("img");
            rewardImage.src = reward.image;
            rewardImage.alt = reward.name;
            rewardImage.classList.add("reward-image");
            rewardContainer.appendChild(rewardImage);

            // Add reward title
            const rewardTitle = document.createElement("h3");
            rewardTitle.textContent = reward.name;
            rewardTitle.classList.add("reward-title");
            rewardContainer.appendChild(rewardTitle);

            // Add reward type
            const rewardType = document.createElement("h4");
            rewardType.textContent = reward.type;
            rewardType.classList.add("reward-type");
            rewardContainer.appendChild(rewardType);

            // Add reward rarity if available
            if (reward.rarity) {
                const rewardRarity = document.createElement("h5");
                rewardRarity.textContent = reward.rarity;
                rewardRarity.classList.add("reward-rarity");
                rewardRarity.style.color = reward.rarity === "common" ? "#ffffff" : reward.rarity === "rare" ? "#01c801" : "#ed03ed";
                rewardContainer.appendChild(rewardRarity);
            }

            // Add reward description
            const rewardDescription = document.createElement("p");
            rewardDescription.textContent = reward.description;
            rewardDescription.classList.add("reward-description");
            rewardContainer.appendChild(rewardDescription);

            // Create the select button with a delay
            setTimeout(() => {
                const selectButton = document.createElement("button");
                selectButton.textContent = `Select ${reward.type}`;
                selectButton.classList.add("class-button", "reward-item");
                selectButton.addEventListener("click", () => {
                    selectReward(reward, player); // Apply the selected reward
                    goToContinueScreen("reward-item"); // Navigate to the continue screen
                    displayBox.classList.remove("reward-display"); // Remove reward display class
                });
                buttonBox.appendChild(selectButton); // Append the button to the button box
            }, 1000);
        });
    }
}
// Navigate to the fight sequence
function goToFightSequenz(hideItem) {
    removeItems(hideItem); // Remove the specified items from the display

    showLoadingScreenForThreeSeconds(); // Display a loading screen for 3 seconds

    // Display the current round counter
    const roundCounterDisplay = document.createElement("h3");
    roundCounterDisplay.classList.add("title-font", "fight-item");
    roundCounterDisplay.innerHTML = `Round: ${roundCounter + 1}`;
    displayBox.appendChild(roundCounterDisplay);

    // Display the monster's image
    const monsterImage = document.createElement("img");
    monsterImage.src = monsterOptions[roundCounter].image; // Set the monster image source
    monsterImage.alt = monsterOptions[roundCounter].name; // Set the alternative text
    monsterImage.classList.add("fight-item", "monster-image");
    displayBox.appendChild(monsterImage);

    // Adjust button box layout to column if needed
    if (buttonBox.classList.contains("button-box-flex-row")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }

    setTimeout(() => {
        // Display "Fight in progress" message
        displayItems("h3", "Fight in progress", buttonBox, "fight-item", "title-font");

        // Add empty div for layout adjustments
        displayItems("div", "", buttonBox, "fight-item");

        // Initialize monster for the current round
        monster = monsterList[roundCounter];

        // Display player's HP
        const playerHPContainer = document.createElement("div");
        playerHPContainer.classList.add("fight-item", "title-font");
        playerHPContainer.innerHTML = `${playerName} HP: <span id="player-hp">${player.health}</span>`;
        buttonBox.appendChild(playerHPContainer);

        // Display monster's HP
        const monsterHPContainer = document.createElement("div");
        monsterHPContainer.classList.add("fight-item", "title-font");
        monsterHPContainer.innerHTML = `${monsterOptions[roundCounter].name} HP: <span id="monster-hp">${monster.health}</span>`;
        buttonBox.appendChild(monsterHPContainer);
    }, 1000);

    // Start the fight logic based on the round number
    if (roundCounter < 9) {
        setTimeout(() => {
            fight(player, monster, goToRewardSequenz, goToLosingScreen); // Regular fight
        }, 1500);
    } else {
        fight(player, monster, goToWinningScreen, goToLosingScreen); // Final fight
    }
}

// Navigate to the continue screen
function goToContinueScreen() {
    removeItems("reward-item"); // Remove reward items from the display

    // Adjust button box and display box layout if needed
    if (buttonBox.classList.contains("button-box-flex-column")) {
        toggleFlexbox(buttonBox, "button-box-flex-row", "button-box-flex-column");
    }
    if (displayBox.classList.contains("display-box-flex-row")) {
        toggleFlexbox(displayBox, "display-box-flex-column", "display-box-flex-row");
    }

    // Display the continue screen message
    displayItems("h2", "If you are ready start the next fight", displayBox, "continue-screen", "continue-item");

    // Display the "Start next fight" button
    displayItems("button", "Start next fight", displayBox, "continue-screen", "continue-item", "continue-button");

    // Display menu buttons for various options
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item", "player-item-button", "continue-item");
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item", "player-skill-button", "continue-item");
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item", "player-attack-pattern-button", "continue-item");
    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item", "player-attribute-button", "continue-item");

    // Add functionality to menu buttons
    addFunction("player-attribute-button", () => displayPlayerMenuAttributes("Attributes"));
    addFunction("player-skill-button", () => displayPlayerMenu("Skills", playerAvailableSkills));
    addFunction("player-item-button", () => displayPlayerMenu("Items", playerAvailableItems));
    addFunction("player-attack-pattern-button", () => displayPlayerMenu("Attack patterns", playerAvailableFightingStyle));

    // Add functionality to the "Start next fight" button
    addFunction("continue-button", () => {
        if (roundCounter < 10) {
            roundCounter++; // Increment the round counter
            goToFightSequenz("continue-item"); // Start the next fight sequence
        } else {
            displayItems("h2", "Congratulations! You have completed the Game", displayBox, "game-end-message"); // End game message
        }
    });
}
// Navigate to the losing screen
function goToLosingScreen() {
    displayBox.innerHTML = ""; // Clear the display box content
    buttonBox.innerHTML = ""; // Clear the button box content

    displayBox.style.justifyContent = "space-around"; // Adjust layout

    // Create and display the losing image
    const endScreenImage = document.createElement("img");
    endScreenImage.src = "assets/images/end-screen/player-lose.webp"; // Set the losing image source
    endScreenImage.alt = "You lost"; // Alternative text
    endScreenImage.classList.add("end-item"); // Add CSS class for styling
    endScreenImage.style.width = "80%"; // Set the width
    displayBox.appendChild(endScreenImage); // Append the image to the display box

    // Create and display the losing message
    const losingText = document.createElement("h2");
    losingText.classList.add("title-font", "end-item"); // Add CSS classes
    losingText.innerText = "You died. Better luck next time."; // Set the losing text
    displayBox.appendChild(losingText); // Append the text to the display box

    // Create and display the restart button
    const resetButton = document.createElement("button");
    resetButton.classList.add("text-font", "end-item"); // Add CSS classes
    resetButton.innerText = "Restart the game?"; // Set the button text
    resetButton.addEventListener("click", () => {
        location.reload(); // Reload the page to restart the game
    });
    buttonBox.appendChild(resetButton); // Append the button to the button box
}

// Navigate to the winning screen
function goToWinningScreen() {
    displayBox.innerHTML = ""; // Clear the display box content
    buttonBox.innerHTML = ""; // Clear the button box content

    displayBox.style.justifyContent = "space-around"; // Adjust layout

    // Create and display the winning image
    const endScreenImage = document.createElement("img");
    endScreenImage.src = "assets/images/end-screen/player-win.webp"; // Set the winning image source
    endScreenImage.alt = "You won"; // Alternative text
    endScreenImage.classList.add("end-item"); // Add CSS class for styling
    endScreenImage.style.width = "80%"; // Set the width
    displayBox.appendChild(endScreenImage); // Append the image to the display box

    // Create and display the winning message
    const winningText = document.createElement("h2");
    winningText.classList.add("title-font", "end-item"); // Add CSS classes
    winningText.innerText = "You are victorious"; // Set the winning text
    displayBox.appendChild(winningText); // Append the text to the display box

    // Create and display the restart button
    const resetButton = document.createElement("button");
    resetButton.classList.add("text-font", "end-item"); // Add CSS classes
    resetButton.innerText = "Restart the game?"; // Set the button text
    resetButton.addEventListener("click", () => {
        location.reload(); // Reload the page to restart the game
    });
    buttonBox.appendChild(resetButton); // Append the button to the button box
}

// Apply reset settings to the restart button
document.getElementById("restart-button").addEventListener("click", displayUserChoiceConfirmation);

// Apply input validation to the start button
document.getElementById("start-button").addEventListener("click", validateInput);

// Apply functionality to the info button
document.getElementById("info-button").addEventListener("click", displayTutorial);

// Apply functionality to the inner info button inside the display box
document.getElementById("inner-info-button").addEventListener("click", displayTutorial);