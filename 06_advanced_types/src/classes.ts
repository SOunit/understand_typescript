type test = string | number;

abstract class Department {
  static fiscalYear = 2020;

  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  print() {
    console.log(this);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(this: ITDepartment): void {
    console.log(`IT Department (${this.id}): ${this.name}`, this.employees);
    console.log(Department.fiscalYear);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("value is invalid.");
    }
    this.addReport(value);
    this.lastReport = value;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    this.employees.push(name + " accountant");
  }

  describe(this: AccountingDepartment): void {
    console.log(
      `Accounting Department (${this.id}): ${this.name}`,
      this.employees
    );
    console.log(Department.fiscalYear);
  }
}

const it = new ITDepartment("d1", ["test", "test"]);
it.describe();
it.print();

// const account = new AccountingDepartment("a1", []);
const account1 = AccountingDepartment.getInstance();
const account2 = AccountingDepartment.getInstance();
console.log("account1 === account2", account1 === account2);

account1.addReport("test1");
account1.addReport("test2");
account1.addEmployee("Jack");
account1.addEmployee("Jack");
account1.mostRecentReport = "test";

account1.print();
console.log(account1.mostRecentReport);
account2.print();
