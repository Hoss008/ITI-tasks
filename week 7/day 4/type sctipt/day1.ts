let num: number = 5;
let str: string = "hossam";
let bol: boolean = true;
let arr: number[] = [1, 2, 3, 4, 5];
console.log(num, str, bol, arr);
//////////////////////////////////Q1

let mix: (string | number)[] = ["me", 80, 50, "hello-world"];
function printArrayElements() {
  for (const element of mix) {
    console.log(`type : ${typeof element}, value: ${element}`);
  }
}
printArrayElements();
//////////////////////////////////Q2

enum trafficLight {
  red,
  yellow,
  green,
}
function getAction(lights: trafficLight): string {
  switch (lights) {
    case trafficLight.red:
      return "Stop";
    case trafficLight.yellow:
      return "Get Ready";
    case trafficLight.green:
      return "Go";
    default:
      return "Invalid light";
  }
}

console.log(getAction(trafficLight.yellow));
//////////////////////////////////Q3

enum Role {
  Admin,
  User,
  Guest,
}

let userInfo: [number, string, Role] = [1, "hossam", Role.Admin];

function describeUser(user: [number, string, Role]) {
  const [id, name, role] = user;
  console.log(`User Role: ${Role[role]}`);
}

describeUser(userInfo);
//////////////////////////////////Q4

function turn(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return `$${input}`;
  }
  return "";
}

console.log(turn(5));
console.log(turn("hosam"));
//////////////////////////////////Q5

let input: unknown = "programming";

function processInput(x: string | number) {
  if (typeof x === "string") {
    console.log(x.toLocaleUpperCase());
  } else if (typeof x === "number") {
    console.log(x * x);
  }
}

processInput("hossam");
processInput(5);
//////////////////////////////////Q6
