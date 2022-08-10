function divCreator() {
    let canvas = 0;
    let div;
    while(canvas < 16) {
        div = document.createElement("div");
        document.querySelector(".container").appendChild(div);
        canvas++;
    };
};

divCreator();