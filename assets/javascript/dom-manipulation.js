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
//Generic functions
function toggleFlexbox() {
    // Change flex-Design
    buttonBox.classList.toggle("button-box-flex-row")
    buttonBox.classList.toggle("button-box-flex-column")
    displayBox.classList.toggle("display-box-flex-column")
    displayBox.classList.toggle("display-box-flex-row")
}

function displayItems(tagType, innerText, displayPlace, ...classAttribute) {
    const displayedItem = document.createElement(tagType)
    displayedItem.classList.add(...classAttribute)
    displayedItem.innerText = innerText
    displayPlace.appendChild(displayedItem)
}

function hideItems(classItem) {
    const removeableItem = document.getElementsByClassName(classItem)
    for (let item = 0; item < removeableItem.length; item++) {
        removeableItem[item].classList.add("hidden")
    }
}

function addOnclickEffect(targetClass, targetFunction) {
    const targetedItem = document.getElementsByClassName(targetClass)
    for (let item = 0; item < targetedItem.length; item++) {
        targetedItem.onclick = targetFunction
    }

}
//Reset Game
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

function resetGame() {
    displayUserChoiceConfirmation()
    //Unfinished
}

function goToClassChoice() {
    hideItems("start-item")
    //Display Reward choice buttons
    displayItems("button", "Left", buttonBox, "reward-button", "reward-item")
    displayItems("button", "Middle", buttonBox, "reward-button", "reward-item")
    displayItems("button", "Right", buttonBox, "reward-button", "reward-item")
    //Add onclick effect
    addOnclickEffect("reward-button", () => goToFightSequenz())
    //Create Hero Choice 
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
    displayItems("div", "###", displayBox, "reward-display-option", "reward-item", "text-font")
}


function goToFightSequenz() {
    hideItems("reward-Items")
    displayItems("button", "Attributes", buttonBox, "player-menu-button", "menu-item")
    displayItems("button", "Skills", buttonBox, "player-menu-button", "menu-item")
    displayItems("button", "Items", buttonBox, "player-menu-button", "menu-item")
    displayItems("button", "Attack Patterns", buttonBox, "player-menu-button", "menu-item")

    addOnclickEffect("player-menu-button", () => goToFightSequenz())


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
        toggleFlexbox()

    }
}

//Choose Reward and then remove reward items
function chooseReward() {
    //Write Logic so that the Reward choosen gets saved
    hideItems("reward-item")
    displayItems("button", "Attributes", buttonBox, "reward-button", "player-menu")
    displayItems("button", "Skills", buttonBox, "reward-button", "player-menu")
    displayItems("button", "Attack Patterns", buttonBox, "reward-button", "player-menu")
    displayItems("button", "Items", buttonBox, "reward-button", "player-menu")
    displayFightSequenz()
}