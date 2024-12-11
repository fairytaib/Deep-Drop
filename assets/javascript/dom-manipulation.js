//DOM ELEMENTS START

// title display
const titleDisplay = document.getElementById("title-display")
const roundCounterDisplay = document.getElementById("round-counter-display")

//Display Box Items
const displayBox = document.getElementById("display-box-section")
const displayBoxStartItems = document.getElementsByClassName("display-box-item")

//Button Box Items
const buttonBox = document.getElementById("button-box-section")
const inputTitle = document.getElementById("input-title")
const startButton = document.getElementById("start-button")
const playerNameInput = document.getElementById("player-name-input")

// Menu Button
const playerStatButton = document.getElementById("player-stat-button")
const playerSkillButton = document.getElementById("player-skill-button")
const playerFightingStyleButton = document.getElementById("player-fighting-style-button")
const playerInventoryButton = document.getElementById("player-inventory-button")

//DOM ELEMENTS END


//VARIABLES START

// Player Name Variable
let playerName = ""

//VARIABLES END

//FUNCTIONS START
//Restart Button Functions
function resetGame() {
    displayUserChoiceConfirmation()
}

function displayUserChoiceConfirmation() {
    // Create and window and class connection
    const confirmWindow = document.createElement("div");
    confirmWindow.classList.add("confirm-window");

    // Insert text
    confirmWindow.textContent = "Are you sure you want to proceed?";

    // Yes-No Buttons
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.style.width = "60%"
    yesButton.onclick = () => confirmWindow.remove();

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.style.width = "60%"
    noButton.onclick = () => confirmWindow.remove();

    confirmWindow.appendChild(yesButton);
    confirmWindow.appendChild(noButton);

    // push the window into Display
    displayBox.appendChild(confirmWindow);
}

// Reward Choice buttons
function displayRewardButtons() {
    const rewardOneButton = document.createElement("button")
    const rewardTwoButton = document.createElement("button")
    const rewardThreeButton = document.createElement("button")

    rewardOneButton.textContent = "Left"
    rewardTwoButton.textContent = "Middle"
    rewardThreeButton.textContent = "Right"

    //Add Classes to Buttons
    rewardOneButton.classList.add("reward-button")
    rewardTwoButton.classList.add("reward-button")
    rewardThreeButton.classList.add("reward-button")

    //Insert into Button-box
    buttonBox.appendChild(rewardOneButton)
    buttonBox.appendChild(rewardTwoButton)
    buttonBox.appendChild(rewardThreeButton)
}
//Reward Options
function displayRewardOptions(rewardOne, rewardTwo, rewardThree) {
    const rewardOneDisplay = document.createElement("div")
    const rewardTwoDisplay = document.createElement("div")
    const rewardThreeDisplay = document.createElement("div")
    //Add class
    rewardOneDisplay.classList.add("reward-display-option")
    rewardTwoDisplay.classList.add("reward-display-option")
    rewardThreeDisplay.classList.add("reward-display-option")

    //Insert Items into display
    displayBox.appendChild(rewardOneDisplay)
    displayBox.appendChild(rewardTwoDisplay)
    displayBox.appendChild(rewardThreeDisplay)

}


//Move from start screen to character selection
function removeStartScreen() {
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
    for (let item = 0; item < displayBoxStartItems.length; item++) {
        displayBoxStartItems[item].classList.toggle("hidden")
    }
}


// Input validation
function validateInput() {
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
        removeStartScreen()
        displayRewardButtons()
        displayRewardOptions()
    }
}

//FUNCTIONS SECTION END