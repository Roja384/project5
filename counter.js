let value=0;
function updateColor() {
    const val = document.getElementById("value");

    if (value > 0) val.style.color = "green";
    else if (value < 0) val.style.color = "red";
    else val.style.color = "black";
}
function increase(){
    value++;
    document.getElementById("value").innerText=value;
    updateColor();
}
function decrease(){
    value--;
    document.getElementById("value").innerText=value;
    updateColor();
}
function reset(){
    value=0;
    document.getElementById("value").innerText=value;
    updateColor();
}