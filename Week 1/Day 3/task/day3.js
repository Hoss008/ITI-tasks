// var num = prompt("enter a number: ");
// if (num > 0) {
//   console.log("this number is positive");
// } else if (num < 0) {
//   console.log("this number is negative");
// } else {
//   console.log("this number is zero");
// }
// //Q1

// var answer = confirm("Do you want to proceed");
// if (answer == true) {
//   alert("You chose to proceed");
// } else {
//   alert("action canceled");
// }
// //Q2

// var numb = 10;
// console.log(numb % 2 === 0 ? console.log("hi") : console.log("heloo"))
// //Q3

//  var age = prompt("enter you age")
// if (age <= 0) {
//     console.log("positive numbers only");
// } else if (age >=1 && age <=10  ) {
//     console.log("child is between 1-10");
// }
// else if (age >=11 && age <=18) {
//     console.log("Teenager is between 11-18");
// }
// else if (age >=19 && age <=50) {
//     console.log("Grown up is between 19-50");
// }
// else{
//     console.log("old is greater than 50");
// }

//Q4 DONT FORGET TO LOOK AT THE BONUS QUESTION

var clock = prompt("Enter the time in 24-hour format (0-23):");
clock = parseInt(clock);

if (clock < 0 || clock > 23) {
  console.log("Invalid input! Please enter a number between 0 and 23.");
} else if (clock === 0) {
  console.log("It's 12 AM");
} else if (clock > 0 && clock < 12) {
  console.log("It's " + clock + " AM");
} else if (clock === 12) {
  console.log("It's 12 PM");
} else {
  console.log("It's " + (clock - 12) + " PM");
}
//Q5

// var letter = prompt("enter your string")
// console.log(letter[0].toUpperCase() +letter.substring(1));
// //Q6

// var color = prompt("what is your fav color")
// var response = confirm("you chose   "  +  color  +"   is that correct ")
// if (response) {
//     alert("great choice")
// } else {
//     alert("lets try again")
// }
// //Q7

// var date1 = new Date
// var date2 = new Date
// console.log(date1 > date2);
//Q8

var date1 = "2025-07-01";
var date2 = "2025-07-22";
var d1 = new Date(date1);
var d2 = new Date(date2);
var time1 = d1.getTime();
var time2 = d2.getTime();
var diffInMs = Math.abs(time2 - time1); // for positive numbers
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log("Number of days between the two dates: " + diffInDays);
//Q9

// var world = "Hello World!";
// var world2 = world.slice(6, 11);
// console.log(world2);
// //Q10

// var nm = 5.678;
// var rounded = nm.toFixed(2);
// console.log(rounded);
// //Q11

// let numb = prompt("enter number ");
// if (numb % 3===0 || numb % 5===0) {
//   console.log("true");
// } else {
//   console.log("false");
// }
//Q12
