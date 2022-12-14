const container = document.querySelector(".container");
const colorWheel = document.querySelector("#color");
const reset = document.querySelector("#reset");
const eraser = document.querySelector("#eraser");
const random = document.querySelector("#randomizer");
const colorButton = document.querySelector("#colorButton");
const sizeValue = document.querySelector("#sizevalue");
const checkbox = document.querySelector("#checkbox");
const label = document.querySelector("#label");
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
checkbox.addEventListener("click", divCreator);

function resetGrid() {
    container.innerText = "";
    divCreator();
};

function enableGrid(e) {
    if(checkbox.checked == true) {
        e.style.border = "1px solid #AAA7F2";
    } else {
        e.style.border = "1px solid transparent"
    };
};

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function resize() {
    size = canvas.value;
    updateSizeValue(size);
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
        enableGrid(div);
    };
};

divCreator();