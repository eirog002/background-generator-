var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient"); 

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

css.textContent = body.style.background + ";";
}  

function randomColor(){
	var color = "#"; 
	for(var i = 0; i < 6; i++){
		color+= Math.floor(Math.random()* 16).toString(16);
	}
	return color; 
} 

function hexColor(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

var button = 
document.createElement("button");
button.innerHTML = "RANDOM";
button.setAttribute("class", "btn");
body.appendChild(button);
button.addEventListener("click", hexColor);

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);