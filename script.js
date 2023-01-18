document.getElementById("Slider").oninput = function changeImageSize() {
    var x = document.getElementById("Slider").value;
    document.getElementById("Panda").style.height = String(x * 40) + "px";
}