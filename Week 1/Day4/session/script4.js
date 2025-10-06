//JS doesnot have function overloading when you call the function many times it calls the last one and override the perevoius one

// function add(x = 0, y = 0) {
//   console.log(x + y);
// }

// add(5);

// function fun1(x) {
//   return x.toUpperCase(); // end of the function,  no code below the return , we use return to get the data and deal with it
// }
// var r = fun1("hello world");
// console.log(r); //used by the developer to test stuff

// var fun = function () {
//   console.log("hi this is js");
// };
// fun();

// //arrow function

// var fun2 = (x) => console.log(x);
// fun2(20);

//nested function

function fun1(x) {
  function fun2(y) {
    console.log("hello from fun2", x + y);
    var fun3 = function () {
      console.log("fun3", x + y + 5);
    };
    fun3();
  }
  fun2(5);
  console.log("fun1", x);
}
// debugger;
fun1(2);

//self execution function  it calls itself ,dont forget the semi colon here
(function (x) {
  console.log("hi", x);
})(30);
console.log("test");

//callback function
function ViewData(funName, x) {
  for (var i = 0; i < x.length; i++) {
    funName(x[i].toUpperCase());
  }
  //funName = print
  funName(x); //print()
}
function print(txt) {
  console.log(txt);
}

ViewData(print, "this is a new text");

function printDoc(data) {
  document.write(data);
}
ViewData(printDoc, "hi my name is admin");

// console.log(hh);

try {
  console.log(hh);
} catch (e) {
  console.error("error in code", e); //e is the object holding the error
} finally {
  console.log("final");
}
console.log("test data");

console.log("asas");
