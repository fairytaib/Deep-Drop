let playerName = ""

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
    }
}