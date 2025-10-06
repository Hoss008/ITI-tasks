// const info = {
//     name:"Hossam",
//     age:24,
//     major:"cs",
// }
// for (let key in info) {
//   console.log(`${key}: ${info[key]}`);
// }
// /////////////////////////////////////////Q1

// let arr =[1,2,3,4,5,6,7,8,9,10]

// for (const element of arr) {
//     console.log(element); //prints the values
// }
// /////////////////////////////////////////Q2

// for (const index in arr) {
//     console.log(index); //prints the indexes
// }
// /////////////////////////////////////////Q3

// let num1 = [...arr]
// console.log(num1);
// /////////////////////////////////////////Q4

// let Std_name = "Hossam"
// let fac_name = "Computer Science"
// let Uni_name = "oxford"
// let grad = 90;

// let all = `${Std_name}  is a student in faculty of ${fac_name}  in university ${Uni_name} And his final grad is ${grad}`;
// console.log(all);
// /////////////////////////////////////////Q5

// let str = "heloo";
// console.log(str.includes('e'));
// /////////////////////////////////////////Q6

// let obj1 = {
//     name:"hossam",
//     age:null,
//     major:undefined
// }

// const username = obj1.name ?? "default value";
// console.log(username);
// const userage = obj1.age ?? "default value";
// console.log(userage);
// const usermajor = obj1.major ?? "default value";
// console.log(usermajor);
// /////////////////////////////////////////Q7

// const userProfile = {
//   id: 101,
//   name: "ahmed",
//   contact: {
//     phone: "0123456789",
//     address: {
//       street: "12 Nile Street",
//       city: "Cairo",
//       postal: "11311"
//     }
//   },
//   preferences: null
// };

// delete userProfile.contact.address; // Remove address
// console.log(userProfile.contact.address.city)  //throw an error;
// console.log(userProfile.contact?.address?.city);  //  Prints undefined
// /////////////////////////////////////////Q8

// const user ={
//     name:"hossam",
//     age:"24",
//     hobbies:"chess"
// }

// const cloned = {...user};

// cloned.age = 30
// cloned.name = "Hassan"
// cloned.hobbies = "reading"

// console.log(user); //original
// console.log(cloned);
// /////////////////////////////////////////Q9

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};

const {
  translations: [
    {
      localization_tags: [tag1, tag2],
    },
  ],
} = metadata;

console.log(tag1); // "de-gen"
console.log(tag2); // "de-or"
/////////////////////////////////////////Q10

// const users = {
//     name1:"hossam",
//     name2:"hassan",
//     name3:"ahmed"
// }

// const test = Object.entries(users)
// console.log(test);

// const student = {
//   name: 'hossam',
//   faculty: 'Engineering',
//   university: 'Cairo University'
// };

// const transformed = [];

// Object.entries(student).forEach(([key, value]) => {
//   transformed.push([key.toUpperCase(), value]);
// });
// console.log(transformed);
// /////////////////////////////////////////Q11

// const secret = Symbol('privateValue');
// const user = {
//   name: 'Ali',
//   age: 22,
//   [secret]: 'This is hidden'
// };

// console.log(Object.keys(user));
// for (const key in user) {
//   console.log(key);
// }

// console.log(user[secret]);
// /////////////////////////////////////////Q12
