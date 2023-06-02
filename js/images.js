let randomNumber;

let imageLeft = document.getElementById("img_left")

function changeImageLeft() {
    if (randomNumber === 1) {
        imageLeft.src = "/img/rock_left.png"
    }
    else if (randomNumber === 2) {
        imageLeft.src = "/img/paper_left.png"
    }
    else if (randomNumber === 3) {
        imageLeft.src = "/img/scissors_left.png"
    };
};

let rockBt = document.getElementById("rock");
let paperBt = document.getElementById("paper");
let scissorsBt = document.getElementById("scissors");

let imageRight = document.getElementById("img_right");

function rockFc() {
    imageRight.src = "/img/rock_right.png";
    randomNumber = Math.floor(Math.random() * 3) + 1;
    changeImageLeft();
    checkResult()
};

function paperFc() {
    imageRight.src = "/img/paper_right.png";
    randomNumber = Math.floor(Math.random() * 3) + 1;
    changeImageLeft();
    checkResult()
};

function scissorsFc() {
    imageRight.src = "/img/scissors_right.png";
    randomNumber = Math.floor(Math.random() * 3) + 1;
    changeImageLeft();
    checkResult()
};

let resultMessage = document.getElementById("result_message");

function checkResult() {
    if (imageRight.src.includes("scissors") && imageLeft.src.includes("rock")) {
        resultMessage.textContent = "You lost!";
    } else if (imageRight.src.includes("scissors") && imageLeft.src.includes("paper")) {
        resultMessage.textContent = "You won!";
    } else if (imageRight.src.includes("paper") && imageLeft.src.includes("scissors")) {
        resultMessage.textContent = "You lost!";
    } else if (imageRight.src.includes("paper") && imageLeft.src.includes("rock")) {
        resultMessage.textContent = "You won!";
    } else if (imageRight.src.includes("rock") && imageLeft.src.includes("paper")) {
        resultMessage.textContent = "You lost!";
    } else if (imageRight.src.includes("rock") && imageLeft.src.includes("scissors")) {
        resultMessage.textContent = "You won!";
    } else if (imageRight.src.includes("paper") && imageLeft.src.includes("paper")) {
        resultMessage.textContent = "Draw!";
    } else if (imageRight.src.includes("rock") && imageLeft.src.includes("rock")) {
        resultMessage.textContent = "Draw!";
    } else if (imageRight.src.includes("scissors") && imageLeft.src.includes("scissors"))
        resultMessage.textContent = "Draw!"
    else {
        resultMessage.textContent = "";
    }

}