// console.log("Hello Youtube");
// console.log("September 11th Crash");
// window.alert("This is an announcement for an attack at the Twin Towers")
// window.alert("Towers is down!! Heil Hitler")

document.getElementById("myH1").textContent = "Hello Youtube";
document.getElementById("myP").textContent = "September 11th Crash";

let x,y;
x = 100; y = 150;
console.log(x,y);

let price = 125;

let firstName = "Joe MAma";

console.log("Fuck you Nigga, " + firstName);

console.log("A Mauser C96 is worth $" + price);

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Get the input value
    var inputText = document.getElementById('inputText').value;
    
    // Log the input value to the console
    console.log(inputText);
    
    // Optionally, you can clear the input field
    document.getElementById('inputText').value = '';
});

//let username = window.prompt("What's your name, Nazi Solider?");

//console.log(username);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById('myText').value = '';
}

// let age =  window.prompt("How old are you?");
// age = Number(age);
// age += 50; 
// console.log("This is your age 50 years later: " + age);

const PI = 3.14159;
let radius;
let circumference;  

function calculateCircumference() {
    let radius = document.getElementById("my2Text").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    console.log("The circumference of the circle is: " + circumference);
    document.getElementById('result').textContent = "The circumference of the circle is: " + circumference;
}

// Attach the click event to the button
document.getElementById("my2Submit").onclick = function() {
    calculateCircumference();
};

// Attach the keyup event to the input field
document.getElementById("my2Text").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculateCircumference();
    }
});