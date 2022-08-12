const container = document.querySelector(".container");
const colorWheel = document.querySelector("#color");
const reset = document.querySelector("#reset");
const eraser = document.querySelector("#eraser");
const random = document.querySelector("#randomizer");
const colorButton = document.querySelector("#colorButton");

let mode;
let color = colorWheel.value;

reset.addEventListener("click", resetGrid);
colorButton.addEventListener("click", () => {mode = "color"});
random.addEventListener("click", () => {mode = "rainbow"});
eraser.addEventListener("click", () => {mode = "eraser"});

function resetGrid() {
    container.innerText = "";
    divCreator();
}

function changeColor(e) {
    if(mode == "rainbow") {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        e.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if(mode == "color") {
        color = colorWheel.value;
        e.style.backgroundColor = color;
    } else if(mode == "eraser") {
        e.style.backgroundColor = "#ffffff";
    };
}

function divCreator() {
    for(canvas = 0; canvas < 16 * 16; canvas++) {
        let div = document.createElement("div");
        div.innerText = "test";
        div.addEventListener("click", () => {
            changeColor(div);
        });
        container.appendChild(div);
    };
};

divCreator();