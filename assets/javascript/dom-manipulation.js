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

// Input validation
function validateInput() {
    const buttonBox = document.getElementById("button-box")
    const inputTitle = document.getElementById("input-title")
    const startButton = document.getElementById("start-button")
    const playerNameInput = document.getElementById("player-name-input")
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
        // Change windows
        buttonBox.classList.toggle("button-box-flex-row")
        buttonBox.classList.toggle("button-box-flex-column")
        // Hide Elements
        startButton.classList.toggle("hidden")
        playerNameInput.classList.toggle("hidden")
        inputTitle.classList.toggle("hidden")
        // Show elements - Fix Flex direction for proper display
        rewardOne.classList.remove("hidden")
        rewardTwo.classList.remove("hidden")
        rewardThree.classList.remove("hidden")
        // Fix Flex direction for proper display
    }
}