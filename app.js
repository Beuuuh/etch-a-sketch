const container = document.querySelector(".container");
const colorWheel = document.querySelector("#color");
const reset = document.querySelector("#reset");
const eraser = document.querySelector("#eraser");
const random = document.querySelector("#randomizer");
const colorButton = document.querySelector("#colorButton");
const canvas = document.querySelector("#canvas");
canvas.value = 16;

let mode;
let color = colorWheel.value;
let size = canvas.value;

reset.addEventListener("click", resetGrid);
colorButton.addEventListener("click", () => {mode = "color"});
random.addEventListener("click", () => {mode = "rainbow"});
eraser.addEventListener("click", () => {mode = "eraser"});
canvas.addEventListener("click", resize);

function resetGrid() {
    container.innerText = "";
    divCreator();
};

function resize() {
    size = canvas.value;
    resetGrid();
};

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
};

function divCreator() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "pixel");
        div.addEventListener("click", () => {
            changeColor(div);
        });
        container.appendChild(div);
    };
};

divCreator();