// //this line shows my name
// console.log("my name is hossam hassan");
// //this line shows my age
// console.log("my age is 24 ");
// //this line shows my fav language
// console.log("my fav languag is JS");

/////////////////////////////// lab1

// var firstName = "Hossam";         // camelCase
// var LastName = "Hassan";          // PascalCase
// var age = 24;                     // number, not string
// var is_student = true;           // underscore style

// console.log(firstName);
// console.log(LastName);
// console.log(age);
// console.log(is_student);

// var 1name = "hossam";     // Invalid: starts with a number
// var my-name = "hassan";   // Invalid: special character
// var let = "me";           // Invalid: reserved keyword


// try {
//   throw new SyntaxError("Variable name cannot start with a number (e.g., 123name)");
// } catch (error) {
//   console.log(error.message);
// }

// try {
//   // simulate invalid variable name using special characters
//   throw new SyntaxError("Variable name cannot contain special characters (e.g., my-name)");
// } catch (error) {
//   console.log(error.message);
// }

// try {
//   // simulate using reserved keyword
//   throw new SyntaxError("Cannot use reserved keyword as variable name (e.g., let)");
// } catch (error) {
//   console.log(error.message);
// }

/////////////////////////////// lab2

// var num = prompt("enter a numerical grade");
// if (num >= 90 && num <= 100) {
//   alert("excellent");
// } else if (num >= 75 && num <= 89) {
//   console.log("Good");
// } else if (num >= 60 && num <= 74) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }
/////////////////////////////// lab3

// var num = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
// console.log(num); 

/////////////////////////////// lab4

// var product = prompt("Enter a product name");

// if (product) {
//   var lower = product.toLowerCase();

//   if (lower.includes("p") && lower.startsWith("a") && lower.includes("l")
//   ) {
//     console.log(lower);
//   } else {
//     console.log("Enter a valid one");
//   }
// } else {
//   console.log("No input given");
// }
/////////////////////////////// lab5

// function addDays(date,days){
//     var newDate = new Date(date)
//     newDate.setDate(date.getDate()+days)
//     return newDate
// lsa
// } 
// ///////////////////////////  lab6


// var user = prompt("enter your password");
// var pass = "123"

// for(var i = 3; i >0  ; i--){
//     if(user == pass){
//         alert("you may enter")
//         break
//     }
//     else if(i==1){
//         alert("no attempts left")
//         break
//     }
//     else{ //when its wrong but you still have attempts
//         alert("try again")
//         user = prompt ("you can do it")
//     }
// }


// var user = prompt("enter your password");
// var pass = "123"
// var count = 0

// while (count < 3 ) {
//     count++;
//     user;
//     if(user == pass){
//         alert("you may enter")
//         break
//     }
//     else if (count==3){
//         alert("no attempts left")
//         break
//     }
//     else { 
//         alert("try again")
//         user = prompt ("you can do it")
//    }
// }


// var pass = "123";
// var count = 0;

// do {
//     var user = prompt("Enter your password:");
//     if (user == pass) {
//         alert("Correct");
//         break;
//     } else {
//         alert("Wrong, try again");
//         count++;
//     }
// } while (count < 3);

// if (count === 3) {
//     alert("Too many attempts. Try again later.");
// }
    
/////////////////////////////// lab7


// var nums =50;

// for (var i = 1; i <=nums ; i++) {
//     if(i % 2 == 0)
//     continue;
//     console.log(i);
//     if(i == 37)
//     break;
// }

/////////////////////////////// lab8

// var user = prompt("enter a number")

// for (var row = 1; row <=user; row++) {
//     var stars =" " //rows
//         for (var col = 1; col <=row; col++) {
//             stars+="*" //inside it put the stars
//         }       
//         console.log(stars); //print it and start new line
//     }

/////////////////////////////// lab9

// var intial = prompt("enter an intial amount")

// //apply tax
// intial +=intial +14

// // Apply 10% discount
// intial -= intial * 0.10; 

// intial *=intial *12

// intial /=intial /10

// console.log("the final price is"+intial);

/////////////////////////////// lab10

// var pass = prompt("Enter a password");

// if (pass.length >= 8 && /[a-zA-Z]/.test(pass) && /\d/.test(pass)) {
//   console.log("Strong password");
// } else {
//   console.log("Weak password");
// }
/////////////////////////////// lab11

// for (var i = 0; i <5; i++) {
//     console.log('PROMO  '+ Math.floor(Math.random()*9000+1000));
// }
/////////////////////////////// lab12

// (function () {
//   var name = "Hossam";
//   alert(name); 
// })();
// console.log(name); not working outside the IIFE
/////////////////////////////// lab13

// try {
//     var dividend = prompt("enter a dividend")
//     var divisor =prompt("enter a divisor")

//     if (divisor == 0) {
//         throw new Error("you cant divide by zero");
//     }
    
//     var result = dividend / divisor
//     console.log(result);
    

// } catch (error) {
//     console.log(error)
// }
// finally{
//     console.log("we are done today");
    
// }

/////////////////////////////// lab14