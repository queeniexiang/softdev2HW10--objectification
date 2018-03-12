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
	drawDot( e.offsetX, e.offsetY, 25, "green" );
    }
};

//Drawing dots: 
var makeDot = function(x, y, radius, fillColor) {  
    
    var dot = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    
    //Creating a circle based off of mouse positions (x, y coordinates) 
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", radius);
    dot.setAttribute("fill", fillColor); 

    //If dot is clicked on:
    dot.addEventListener("click", changeColor);

    dot.display = function() {
	pic.appendChild(this);
    };

    //Accessors:
    dot.getX = function() {
	return x;
    }

    dot.getY = function() {
	return y;
    }

    dot.getRadius = function() {
	return radius; 
    }
    
    dot.getColor = function() {
	return color;
    }
    
    dot.setX = function (newX) { x = newX} 
    dot.setY = function (newY) { y = newY} 
    dot.setRadius = function (newR) { radius = newR} 
    dot.setColor = function (newC) { fillColor = newC}
    
    dot

    //dot.drawDot();

    return dot; 
};

var drawDot = function(x, y, radius, fillColor) {
    var dot = makeDot(x, y, radius, fillColor);
    dot.display();
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
    drawDot(x, y, 25, "green");
};


    

//Tells SVG drawing space to listen to mouse clicks. Will trigger function clicked upon a mouse click. 
pic.addEventListener("click", clicked, true);

//Clears all SVG elements 
clear.addEventListener("click", clear_svg); 
