// alert("hello world");

// this is notes of JS

console.log("Hossam");
//must be deleted after completing the project for secuirty reasons

console.error("404");

// var fullName ; undifined has 2 meaning value and datatype

var fullName = "hossam";
console.log(fullName);

x = 10;
var x;
console.log(x);
var x = 5;
//hoisting

var isAdmin = true;

var obj = {
  name: "Hossam",
  age: "24",
};
//key , value pair

var arr = [10, 20, 30, 40];

var x = 10;
var y = "20";
console.log(x + y);
//covert both into 2 strings and join them

var x = 10;
var y = "20D";
console.log(x - y);
//when (x-y) if its posssible it performs the math when its not it prints NAN (not a number)

// var del = confirm("delete data ?");
// console.log(del);
// confirm msg

var num = "20";
var num1 = parseInt(num);
console.log(num1);
//convert strings into numbers

var num2 = 50;
console.log(num2.toString(), typeof num2.toString());

// num2.toFixed(2);
//for returning decimals but as a string

var num3 = 20.234523523;
console.log(Math.floor(num3));
//cancels the decimal

console.log(Math.random());
//generate random numbers

var str = "  brooks was here ";
console.log(str[2]);
//read only the char value

// string methods
console.log(str.length);
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.charAt(3));
console.log(str.slice(2, 10));
// the last element is not included
console.log(str.split(""));
//convert string into array
console.log(str.startsWith("A"));
console.log(str.endsWith("f"));
console.log(str.includes("sf"));
console.log(str.concat(" so was red"));
console.log(str.trim());
//removes extra space at rear and end of the string
console.log(str.toLocaleUpperCase());
var myDate = new Date();
//returns the real date and time of the pc that is using my website right now , to take the real time take it from the backend (server side) the accurate one
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

var x = "5";
var y = 5;
console.log(x == y); //true
console.log(x === y); //false data type and value

//ternary operator

x == y ? console.log("true") : console.log("false"); //if ,else only
