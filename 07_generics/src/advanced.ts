type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "test",
  privileges: [""],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = string | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toLocaleString();
  }
  return a + b;
}
const sum = add(1, 2);
const str1 = add("1", "2");

type Job = {
  title?: string;
  description?: string;
};

type UserData = {
  id: string;
  name: string;
  job?: Job;
};

const fetchedUserData: UserData = {
  id: "u1",
  name: "Max",
  job: {},
};

let x = fetchedUserData?.job?.title;

console.log(x);

const userInput = "";
const storedData = userInput ?? "DEFAULT";
console.log("storedData", storedData);

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("name:", emp.name);
  if ("privileges" in emp) {
    console.log("privileges:", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate:", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("driving a car");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log("loading cargo", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird": {
      speed = animal.flyingSpeed;
      break;
    }

    case "horse": {
      speed = animal.runningSpeed;
    }

    default:
      speed = 0;
  }

  console.log(speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// pattern1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// userInputElement.value = "Hi there!";

// pattern2
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// userInputElement.value = "Hi there!";

// pattern3
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "test@test.com",
  username: "test name",
};
