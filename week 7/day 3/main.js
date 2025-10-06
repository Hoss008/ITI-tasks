import { Employee, Manager, WorkerBee, SalesPerson, Engineer } from "./Employee.js";

const emp = new Employee("Hossam Hassan","CEO");
emp.isWorking()
console.log(emp);

const mgr = new Manager("Hassan", "HR", ["ahmed", "sara"]);
console.log(mgr);

const worker = new WorkerBee("omar", "recructing", ["Project Ai"]);
console.log(worker);

const sales = new SalesPerson("Elon", ["tesla,twitter"]);
console.log(sales);

const engineer = new Engineer("hossam", ["MERN"], "PC");
console.log(engineer);
