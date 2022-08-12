const container = document.querySelector(".container");
const colorWheel = document.querySelector("#color");
const reset = document.querySelector("#reset");
const eraser = document.querySelector("#eraser");

reset.addEventListener("click", resetGrid);

let color = colorWheel.value;

colorWheel.addEventListener("change", () => {
    color = colorWheel.value;
});

eraser.addEventListener("click", () => {
    colorWheel.value = "#ffffff";
    color = colorWheel.value;
})

function resetGrid() {
    container.innerText = "";
    divCreator();
}

function divCreator() {
    for(canvas = 0; canvas < 16 * 16; canvas++) {
        let div = document.createElement("div");
        div.innerText = "test";
        div.addEventListener("click", () => {
            div.style.backgroundColor = color;
        });
        container.appendChild(div);
    };
};

divCreator();