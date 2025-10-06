var test = document.querySelector("#tst")
console.log(test);

var red = document.querySelector("#one")
var blue = document.querySelector("#two")
var green = document.querySelector("#three")

red.addEventListener("input",changeColor )
blue.addEventListener("input ",changeColor) 
green.addEventListener("input",changeColor)

function changeColor(){
    console.log(red.value);
    console.log(blue.value);
    console.log(green.value);
    
   var redColor = red.value; 
   var blueColor = blue.value 
   var greenColor = green.value;
console.log(test);
test.style.color = "rgb(" + redColor + "," + greenColor + ","  + blueColor + ")" 


}