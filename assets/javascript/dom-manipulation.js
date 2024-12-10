// title
titleDisplay = document.getElementById("title-display")
roundCounterDisplay = document.getElementById("round-counter-display")

// Event Display
playerStatWindow = document.getElementById("player-stat-window")
playerSkillWindow = document.getElementById("player-skill-window")
playerFightingStyleWindow = document.getElementById("player-fighting-style-window")
playerInventoryWindow = document.getElementById("player-inventory-window")

// Reward Button Display
rewardOne = document.getElementById("reward-button-one")
rewardTwo = document.getElementById("reward-button-two")
rewardThree = document.getElementById("reward-button-three")

// Menu Button
playerStatButton = document.getElementById("player-stat-button")
playerSkillButton = document.getElementById("player-skill-button")
playerFightingStyleButton = document.getElementById("player-fighting-style-button")
playerInventoryButton = document.getElementById("player-inventory-button")

// Player Name Variable
let playerName = ""

// Input validation
function validateInput() {
    const input = document.getElementById("player-name-input").value
    const pattern = /^[a-zA-Z0-9]+$/;

    if (input.length <= 2) {
        alert("To short")
    } else if (!pattern.test(input)) {
        alert("Wrong")
    } else if (input.length > 20) {
        alert("To long")
    } else {
        playerName = input
        // Change windows
    }
}