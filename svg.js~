var clear = document.getElementById("clear");

var pic = document.getElementById("vimage"); 

//Clear Function: 
var clear_svg = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    isClear = true;
};

//Draws dots when SVG is clicked
var clicked = function(e) {
    if (e.toElement == this) {
	console.log(e.offsetX);
	console.log(e.offsetY);
	console.log(e.toElement);
	drawDot( e.offsetX, e.offsetY );
    }
};

//Drawing dots: 
var drawDot = function(x, y) {  
    
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    
    //Creating a circle based off of mouse positions (x, y coordinates) 
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "30"); 

    pic.appendChild(cl);

    //If dot is clicked on:
    cl.addEventListener("click", changeColor);   
};

//Changes color of the dot being clicked on
var changeColor = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "lime");
    
    //If this dot is clicked again: 
    this.addEventListener("click", drawRand); 
};

//If the dot is clicked on again: it will be erased and another dot will spawn in a random location 
var drawRand = function() {
    pic.removeChild(this);
    var x = Math.random() * 500;
    var y = Math.random() * 500; 
    drawDot(x, y);
}; 
    

//Tells SVG drawing space to listen to mouse clicks. Will trigger function clicked upon a mouse click. 
pic.addEventListener("click", clicked, true);

//Clears all SVG elements 
clear.addEventListener("click", clear_svg); 
