let playerName = ""

function validateInput() {
    const input = document.getElementById("player-name-input").value
    const pattern = /^[a-zA-Z0-9]+$/;

    if (pattern.test(input)) {
        console.log("Wrong")
    } else {
        playerName = input
    }
}