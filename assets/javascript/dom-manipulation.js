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
    const startButton = document.getElementById("start-button")
    const playerNameInput = document.getElementById("player-name-input").value
    const pattern = /^[a-zA-Z0-9]+$/;

    if (playerNameInput.length <= 2) {
        alert("To short")
    } else if (!pattern.test(playerNameInput)) {
        alert("Wrong")
    } else if (playerNameInput.length >= 20) {
        alert("To long")
    } else {
        alert("yo")
        // Update player name
        playerName = playerNameInput.value
        // Change windows

    }
}