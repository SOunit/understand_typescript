const names: Array<string> = [];
names.push("test1");
names.push("test2");
names.push("test3");
console.log(names);

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 1000);
});

promise.then((data) => {
  data.split(" ");
  console.log(data);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
console.log(merge({ name: "Jack" }, { age: 38 }));

const mergedObj1 = merge({ name: "Jack" }, { name: "Bec", age: 38 });
// const mergedObj2 = merge({ name: "Jack" }, 30);
const mergedObj2 = merge({ name: "Jack" }, { age: 38 });
console.log(mergedObj1);
console.log(mergedObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 0) {
    descriptionText = `Got ${element.length} element`;
  }

  return [element, descriptionText];
}

countAndDescribe({ num: 10, length: 1 });
countAndDescribe("10");
countAndDescribe({ bool: true, length: 1 });
// countAndDescribe({ name: "Jack" });
// countAndDescribe([{ name: "Jack" }]);

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
// extractAndConvert({}, "name");
extractAndConvert({ name: "Jack" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manuel");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ["Max", "Anna"];
// names2.push("Manuel");
