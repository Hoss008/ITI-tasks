 class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
  isWorking(){
    console.log(`${this.name.toUpperCase()} is working`);
  }
}

  class Manager extends Employee {
  constructor(name = "", dept = "general", reports = []) {
    super(name, dept);
    this.reports = reports;
  }
}

class WorkerBee extends Employee {
  constructor(name = "", dept = "general", projects = []) {
    super(name, dept);
    this.projects = projects;
  }
}

class SalesPerson extends WorkerBee {
  constructor(name = "", projects = [], quota = 100,) {
    super(name, "sales", projects);
    this.quota = quota;
  }
}

class Engineer extends WorkerBee {
  constructor(name = "", projects = [], machine = "") {
    super(name, "engineering", projects);
    this.machine = machine;
  }
}

export { Employee, Manager, WorkerBee, SalesPerson, Engineer };