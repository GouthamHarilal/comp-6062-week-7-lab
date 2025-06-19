
const fruit = {
    Name: "Dragon Fruit",
    Color: "Pink",
    Taste: "Sour and Sweet"
}

let numIn = document.querySelector("#numberInput");

let fName = document.querySelector("#fruitName");
let fColor = document.querySelector("#fruitColor");
let fTaste = document.querySelector("#fruitTaste");

numIn.addEventListener("input", function() {
    if(numIn.value >= 10 || numIn.value <= -10) {
        alert("Number Should be b/w -10 and 10.");
    }
}) 

fName.innerHTML = `Name : ${fruit.Name}`;
fColor.innerHTML = `Color: ${fruit.Color}`;
fTaste.innerHTML = `Taste: ${fruit.Taste}`; 
