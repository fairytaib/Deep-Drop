// title
const titleDisplay = document.getElementById("title-display")
const roundCounterDisplay = document.getElementById("round-counter-display")

// Event Display
const playerStatWindow = document.getElementById("player-stat-window")
const playerSkillWindow = document.getElementById("player-skill-window")
const playerFightingStyleWindow = document.getElementById("player-fighting-style-window")
const playerInventoryWindow = document.getElementById("player-inventory-window")


// Reward Button Display
const rewardOne = document.getElementById("reward-button-one")
const rewardTwo = document.getElementById("reward-button-two")
const rewardThree = document.getElementById("reward-button-three")

// Menu Button
const playerStatButton = document.getElementById("player-stat-button")
const playerSkillButton = document.getElementById("player-skill-button")
const playerFightingStyleButton = document.getElementById("player-fighting-style-button")
const playerInventoryButton = document.getElementById("player-inventory-button")

// Player Name Variable
let playerName = ""


//Restart Button
function resetGame() {
    //open window "Are you sure? You will lose all your progress"
    //if button click = yes restart
    //if button click = no just close the window again
}

// Input validation
function validateInput() {
    //Display Box Items
    const displayBox = document.getElementById("display-box-section")
    const displayBoxItems = document.getElementsByClassName("display-box-item")
    //Button Box Items
    const buttonBox = document.getElementById("button-box-section")
    const inputTitle = document.getElementById("input-title")
    const startButton = document.getElementById("start-button")
    const playerNameInput = document.getElementById("player-name-input")
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
        // Change flex-Design
        buttonBox.classList.toggle("button-box-flex-row")
        buttonBox.classList.toggle("button-box-flex-column")
        displayBox.classList.toggle("display-box-flex-column")
        displayBox.classList.toggle("display-box-flex-row")
        // Hide Elements
        startButton.classList.toggle("hidden")
        playerNameInput.classList.toggle("hidden")
        inputTitle.classList.toggle("hidden")
        //toggle display-Box-items
        for (let item = 0; item < displayBoxItems.length; item++) {
            displayBoxItems[item].classList.toggle("hidden")
        }
        // Show elements - Fix Flex direction for proper display
        rewardOne.classList.toggle("hidden")
        rewardTwo.classList.toggle("hidden")
        rewardThree.classList.toggle("hidden")
        // Fix Flex direction for proper display
    }
}