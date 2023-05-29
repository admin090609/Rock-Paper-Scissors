let randomNumber;

let imageLeft = document.getElementById("img_left")

function changeImageLeft() {
if (randomNumber === 1) {
    imageLeft.src = "/img/rock_left.png"
};

if (randomNumber === 2) {
    imageLeft.src = "/img/paper_left.png"
};

if (randomNumber === 3) {
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
    setTimeout(3000)
};

function paperFc() {
    imageRight.src = "/img/paper_right.png";
    randomNumber = Math.floor(Math.random() * 3) + 1;
    changeImageLeft();
    setTimeout(3000)
};

function scissorsFc() {
    imageRight.src = "/img/scissors_right.png";
    randomNumber = Math.floor(Math.random() * 3) + 1;
    changeImageLeft();
    setTimeout(3000)
};
