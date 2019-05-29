let colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
];


let squares = document.querySelectorAll('.S1');
for (i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', changeColor);
    function changeColor() {
      alert('You clicked a square');
      // if correct color square is clicked
      let clickedColor = this.style.backgroundColor;
      resetButton.textContent = 'Try Again!'
      //check if the selected color matches the default color
      if (clickedColor === secretColor) {
        newColors(clickedColor);
        messageDisplay.text = 'You are good at guessing!';
      }
// if the user selected wrong color
else {
  this.style.backgroundColor = "rgb(35, 35, 35)";
  messageDisplay.text = 'Wrong Color!';
  // changeColor(clickedColor);
  // h1.style.background = clickedColor;
  
}
};
function newColors(color){
for (i=0; i<squares.length; i++){
  squares[i].style.backgroundColor = color
};
}




let secretColor = 'rgb(255, 0, 0)';
if (secretColor === changeColor){
  alert('Correct!!');
}
// else {alert('Good Job!')};






  //  colors.innerHTML = secretColor;

//alert(“You clicked a square”);
let numSquares = 6;
let colorS = [];
let pickedColor;
// let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let messageDisplay = document.querySelector("#message");
 
// Selects random color from array
function pickColor() {
  let random = Math.floor(Math.random() * colors.length); 
  return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}



function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    })
  }
}
}

	
