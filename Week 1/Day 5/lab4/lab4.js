// var car ={
//     brand:"BMW",
//     model:"X6",
//     year:2025,}
// console.log(car);
//////////////////////Q1

// for(var i in car){
//     console.log(i,car[i]); 
// }
//////////////////////Q2

// var user = {
//   id: "101",
//   username: "alex",
//   email: "alex@example.com",
//   city: "Cairo",
//   age:"24",
//   address:{
//     country:"egypt",
//     target:"nasrcity"
//   }
// };

// function greetUser(userStuff){
//   console.log(`Hello ${userStuff.address.country}! A welcome email has been sent to ${userStuff.email}.`);   
// }
// greetUser(user)

//trial


// function swapKeysAndValues(obj) {
//   var swapped = {};

//   for (let key in obj) {
//     let originalKey = key;
//     let originalValue = obj[key];

//     [originalKey, originalValue] = [originalValue, originalKey];

//     swapped[originalKey] = originalValue;
//   }

//   return swapped;
// }

// console.log(swapKeysAndValues({ id: "133", name: "hossam" }));
//////////////////////Q3

// var person = {
//   name: "Hossam",
//   age: 24,
//   address: {
//     country: "Egypt",
//     city: "Cairo"
//   },
//   job: {
//     title: "Software Engineer",
//     company: "IBM"
//   },
//   displayDetails: function() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Address: ${this.address.city}, ${this.address.country}`);
//     console.log(`Job: ${this.job.title} at ${this.job.company}`);
//   }
// };

// person.displayDetails();
//////////////////////Q4


// var users = [ //array of objects
//     {id: 1, name: "Hossam", age: 24 },
//     { id: 2, name: "Ahmed", age: 30 },
//     { id: 3, name: "Sara", age: 22 }
// ]

// users.sort(function(a, b) {
//   return a.age - b.age;
// });

// console.log(users)
//////////////////////Q5


// var numbers = [12321,13224134,5234,134,2567,56834,3455,234]

// var max= numbers[0], min = numbers[0];

// for (var i = 0; i <numbers.length; i++) {
//     if (numbers[i] > max) {
//         max= numbers[i]
//     }
//     else if(numbers[i] < min){
//         min = numbers[i]
//     }
// }
// console.log("max is "+ max);
// console.log("min is "+ min);

//////////////////////Q6

// var arr = [10, 20, 30, 40, 50];

// var arr2 = [];

// for (var i = arr.length-1; i >= 0 ; i--) { //start from the end till you reach index 0
//     arr2.push(arr[i])
// }

// console.log(arr2);
//////////////////////Q7

// var products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Headphones", price: 200 }
// ];

// // Discount rate: 20%
// var discountRate = 0.2;

// var discountedProducts = [];

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];

//   // Create a new object with the same name and price
//   var newProduct = {
//     name: product.name,
//     price: product.price,
//     discountedPrice: product.price - (product.price * discountRate)
//   };

//   discountedProducts.push(newProduct);
// }

// console.log(discountedProducts);
//////////////////////Q8

// function getDayName(dateStr) {
//   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
//   var date = new Date(dateStr);             // Convert string to Date object
//   var dayIndex = date.getDay();            
  
//   return days[dayIndex];                    // Use index to get day name from array
// }

// console.log(getDayName("2025-07-26"));  
// console.log(getDayName("2025-07-29"));  
//////////////////////Q9

// var num1 = prompt("enter number like this 1,6,5,9,1,2 ")
// var num2 =prompt("enter number like this 5,6,3,1,9 ")

// var num3 = num1.split(",")
// var num4 = num2.split(",")

// var merged = num3.concat(num4)

// var arr = []

// for (var i = 0; i < merged.length; i++) {
//   if (!arr.includes(merged[i])) {
//     arr.push(merged[i]);
//   }
// }
// console.log(arr);
//////////////////////Q10

// var contacts = [];

// while (true) {
//   var operation = prompt("Enter operation: add, search, or exit").toLowerCase();

//   if (operation === "add") {
//     var name = prompt("Enter contact name:");
//     var phone = prompt("Enter contact phone:");

//     var contact = {
//       name: name,
//       phone: phone
//     };

//     contacts.push(contact);
//     alert("Contact added!");

//   } else if (operation === "search") {
//     var searchTerm = prompt("Enter name or phone number to search:");

//     var found = false;

//     for (var i = 0; i < contacts.length; i++) {
//       if (
//         contacts[i].name === searchTerm ||
//         contacts[i].phone === searchTerm
//       ) {
//         alert("Found: Name: " + contacts[i].name + ", Phone: " + contacts[i].phone);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       alert("Contact not found.");
//     }

//   } else if (operation === "exit") {
//     alert("Goodbye!");
//     break;

//   } else {
//     alert("Invalid operation! Please enter add, search, or exit.");
//   }
// }
/////////////////////////Q11