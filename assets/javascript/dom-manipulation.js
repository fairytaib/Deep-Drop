//DOM ELEMENTS START

// title display
const titleDisplay = document.getElementById("title-display")
const roundCounterDisplay = document.getElementById("round-counter-display")

//Display Box Items
const displayBox = document.getElementById("display-box-section")

//Button Box Items
const buttonBox = document.getElementById("button-box-section")

//DOM ELEMENTS END
//VARIABLES START

// Player Name Variable
const playerNameInput = document.getElementById("player-name-input")
let playerName = ""
//VARIABLES END

//FUNCTIONS START
//Reset Game
function resetGame() {
    displayUserChoiceConfirmation()
    //Unfinished
}
//Confirm User Choice after the Reset Button press
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
//Toggle Flexbox
function toggleFlexbox() {
    // Change flex-Design
    buttonBox.classList.toggle("button-box-flex-row")
    buttonBox.classList.toggle("button-box-flex-column")
    displayBox.classList.toggle("display-box-flex-column")
    displayBox.classList.toggle("display-box-flex-row")
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
//Move from start screen to character selection
function removeStartScreen() {
    toggleFlexbox()
    hideStartItems()
}

// Activate "Hide"-Class
function hideStartItems() {
    const startItems = document.getElementsByClassName("start-item")
    //toggle display-Box-items
    for (let item = 0; item < startItems.length; item++) {
        startItems[item].classList.toggle("hidden")
    }
}
// Reward Choice buttons and Reward Options
function displayRewardOptions(rewardOneOption, rewardTwoOption, rewardThreeOption) {
    const rewardOneDisplay = document.createElement("div")
    const rewardTwoDisplay = document.createElement("div")
    const rewardThreeDisplay = document.createElement("div")
    //Add class
    rewardOneDisplay.classList.add("reward-display-option", "reward-item")
    rewardTwoDisplay.classList.add("reward-display-option", "reward-item")
    rewardThreeDisplay.classList.add("reward-display-option", "reward-item")

    //Insert Items into display
    displayBox.appendChild(rewardOneDisplay)
    displayBox.appendChild(rewardTwoDisplay)
    displayBox.appendChild(rewardThreeDisplay)

    //UNFINISHED BECAUSE WE HAVE TO TAKE THE ARGUMENTS AND THEN DISPLAY IT
}

function displayRewardButtons() {
    const rewardOneButton = document.createElement("button")
    const rewardTwoButton = document.createElement("button")
    const rewardThreeButton = document.createElement("button")

    rewardOneButton.textContent = "Left"
    rewardTwoButton.textContent = "Middle"
    rewardThreeButton.textContent = "Right"

    //Add Classes to Buttons
    rewardOneButton.classList.add("reward-button", "reward-item", "text-font")
    rewardTwoButton.classList.add("reward-button", "reward-item", "text-font")
    rewardThreeButton.classList.add("reward-button", "reward-item", "text-font")

    //Add onclick function
    rewardOneButton.onclick = chooseReward
    rewardTwoButton.onclick = chooseReward
    rewardThreeButton.onclick = chooseReward

    //Insert into Button-box
    buttonBox.appendChild(rewardOneButton)
    buttonBox.appendChild(rewardTwoButton)
    buttonBox.appendChild(rewardThreeButton)
}
//Choose Reward
function chooseReward() {
    //Write Logic so that the Reward choosen gets saved
    hideRewardItems()
    displayPlayerMenuButtons()
    displayFightSequenz()
}

function hideRewardItems() {
    const rewardItems = document.getElementsByClassName("reward-item")
    for (let item = 0; item < rewardItems.length; item++) {
        rewardItems[item].classList.toggle("hidden")
    }
}
//Fight Display and player menu
function displayFightSequenz(monster) {
    const fightingSequenzDisplay = document.createElement("div")

    fightingSequenzDisplay.classList.add("fight-sequenz-display", "text-font")

    displayBox.appendChild(fightingSequenzDisplay)
}

function displayPlayerMenuButtons() {
    const playerStatButton = document.createElement("button")
    const playerSkillButton = document.createElement("button")
    const playerPatternButton = document.createElement("button")
    const playerItemButton = document.createElement("button")

    playerStatButton.classList.add("reward-button")
    playerSkillButton.classList.add("reward-button")
    playerPatternButton.classList.add("reward-button")
    playerItemButton.classList.add("reward-button")

    playerStatButton.innerText = "Attributes"
    playerSkillButton.innerText = "Skills"
    playerPatternButton.innerText = "Attack Patterns"
    playerItemButton.innerText = "Items"

    buttonBox.appendChild(playerStatButton)
    buttonBox.appendChild(playerSkillButton)
    buttonBox.appendChild(playerPatternButton)
    buttonBox.appendChild(playerItemButton)
}





//FUNCTIONS SECTION END