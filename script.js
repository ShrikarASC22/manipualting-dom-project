document.getElementById("p-button").addEventListener("click", function1)
document.getElementById("img-button").addEventListener("click", function2)
function function1 () {
    document.getElementById("p-div").innerHTML = "This is a paragraph."
    document.getElementById("img-div").innerHTML = ""
}
function function2 () {
    document.getElementById("p-div").innerHTML = ""
    var img = document.createElement("img")
    img.src = "korb.webp"
    document.getElementById("img-div").appendChild(img);
}