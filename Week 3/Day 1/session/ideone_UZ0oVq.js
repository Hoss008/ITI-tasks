console.log("Start");  // 1
console.log("1");  //1
function fun(){
  console.log("function exec start");  //
  console.log("2");   //
  setTimeout(function(){
    console.log("3"); //
  },1000) 
  console.log("function exec end"); //
}
console.log("4"); //

setTimeout(function(){
  console.log("5");  //
  
},2000)
setTimeout(function(){
  console.log("6"); //
},0)
console.log("7"); // 
console.log("done");  // 
fun()
