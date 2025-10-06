const set = new Set(["hossam", "hassan", "mohamed", "ahmed"]);
set.add("hossam"); //set doesn't accept repeated values
console.log(...[set]);
for (let names of set) console.log(names);
////////////////////////////////////Q1

const map = new Map();

map.set("Hossam", {
  Grades: [
    { Coursename: "JavaScript", Grade: "Excellent" },
    { Coursename: "Jquery", Grade: "Good" },
    { Coursename: "CSS", Grade: "V.Good" },
  ],
});

map.set("Sara", {
  Grades: [
    { Coursename: "JavaScript", Grade: "Good" },
    { Coursename: "Jquery", Grade: "Excellent" },
    { Coursename: "CSS", Grade: "Good" },
  ],
});

map.forEach(function (v, k) {
  console.log(k, "=>", v);
});

////////////////////////////////////Q2

let arr = [1, 5, 3, 4, 2, 4, 6, 8, 5];
arr.filter((i) => {
  if (i % 2 !== 0) {
    console.log(`odd number:${i}`);
  }
});

console.log(
  arr.forEach((x) => {
    if (x % 2 == 0) {
      console.log(`even number: ${x}`);
    }
  })
);

console.log(arr.find((y) => y > 5)); //question here ?

console.log(
  arr.map(function (x) {
    return x * 2;
  })
);
////////////////////////////////////Q3

let tips = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10"];
function* generator(arr) {
  for (element of arr) yield element;
}

let tipsGenerator = generator(tips);

console.log(tipsGenerator.next().value);
const btn = document
  .querySelector("#btn")
  .addEventListener("click", function () {
    console.log(tipsGenerator.next().value);
  });

const btnTwo = document
  .querySelector("#btn-2")
  .addEventListener("click", function () {
    let tipsGenerator = generator(tips);

    setInterval(() => {
      console.log(tipsGenerator.next().value);
    }, 2000);
  })(
  ////////////////////////////////////Q4

  function (a, b) {
    console.log(a + b);
  }
)(3, 7);
////////////////////////////////////Q5

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello"));
////////////////////////////////////Q6

function createCourseInfo({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "JavaScript",
} = {}) {
  console.log(`Course Name: ${courseName}`);
  console.log(`Course Duration: ${courseDuration}`);
  console.log(`Course Owner: ${courseOwner}`);
}
createCourseInfo({ courseName: "React", courseDuration: "5days" });
createCourseInfo({ courseDuration: "5days" });
createCourseInfo({ courseOwner: "Hossam" });

createCourseInfo();

////////////////////////////////////Q7

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

for (i of fruits) {
  console.log(typeof i);
}

const startsWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(startsWithA);

const filteredFruits = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s")
);
console.log(filteredFruits);

for (x of filteredFruits) {
  console.log(x);
}
////////////////////////////////////Q8
