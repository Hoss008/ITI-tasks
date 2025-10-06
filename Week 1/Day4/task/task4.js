var password = "p@$$";
var userpassword = prompt("enter your password");
while (password != userpassword) {
  userpassword = prompt("Enter the correct password");
}
alert("correct");
Q1;

var sum = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);
Q2;

function calc(n1, ops, n2) {
  switch (ops) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      break;
  }
}
console.log(calc(1, "+", 1));
Q3;

function checkid(username, password) {
  var username = prompt("enter your username");
  var password = prompt("enter your password");

  try {
    if (username === "admin" && password === "421$$") {
      console.log("welcome login success");
    } else {
      throw "this is an error";
    }
  } catch (e) {
    console.log(e);
  }
}
checkid();
Q4;

function guess() {
  var randomnumber = rand();
  var choice = prompt("Guess a number between 0-9");
  if (choice == randomnumber) {
    console.log("You guessed the correct number.");
  } else {
    console.log("Wrong guess. The correct number was " + randomnumber);
  }
  return choice;
}

function rand() {
  return Math.floor(Math.random() * 10);
}

guess();
//Q5

function checkdate() {
  var birth = prompt(
    "enter your date in the following format (DD – MM – YYYY) ex. 22–01–1999"
  );

  if (birth.length == 10 && birth.charAt(2) && date1.charAt(5) == "-") {
    var [day, month, year] = birth.split("-");
    var newDate = newDate(year, month, day);
    alert(newDate.toDataString());
  } else {
    alert("wrong date format");
  }
}
//Q6

function getDayName(dateString) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = new Date(dateString);
  return days[date.getDay()];
}
// Example usage:
console.log(getDayName("2025-07-23")); // Output: Wednesday

Q7;

var vowels = prompt("enter a string");
var a, o, u, i, e;
a = e = u = i = o = 0;
for (var i = 0; i < vowels.length; i++) {
  switch (vowels[i]) {
    case "a":
      a += 1;
      break;
    case "o":
      o += 1;
      break;
    case "u":
      u += 1;
      break;
    case "i":
      i += 1;
      break;
    case "e":
      e += 1;
    default:
      break;
  }
}

console.log(
  " a = " + a + "   u= " + u + "    e=  " + e + "   i=  " + i + " o=  ",
  o
);

Q8;
