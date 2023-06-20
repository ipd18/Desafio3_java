function pintar(event, color = "green") {
    const elemento = event.target;
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function (event) {
    pintar(event, "yellow");
});
