// setTimeout(function () {
//   console.log("Hello, World!");
// }, 5000);

// var id = setInterval(function () {
//   console.log(new Date());
// }, 3000);

// document.getElementById("#btnstop").addEventListener("click", function () {
//   clearInterval();
//   console.log("stopped");
// });

// var imgs = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];

// document.cookie = "user = admin; expires=Fri, 31 Dec 2026 23:59:59 GMT";
// document.cookie = "id=1234;path=day5.html";

// localStorage deals  only with a string

// var obj = {
//   name: "Ahmed",
//   age: 30,
//   city: "Cairo"
// };

// var data= JSON.stringify(obj)

// console.log(data);
// console.log(obj);


// localStorage.setItem("user", "admin");


// var oldData = localStorage.getItem("user");
// console.log(JSON.parse(oldData));

var data ;

var http = new XMLHttpRequest();
http.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) 
    {
        data = http.responseText;
        console.log(JSON.parse(data));
    }
    }
    http.send();
    console.log(data);
    
    var divUsers = document.querySelector("divusers");
    var users = JSON.parse(data);
