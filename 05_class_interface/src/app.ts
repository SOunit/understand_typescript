// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  outputName?: string | undefined;
  age = 30;

  constructor(public name: string = "") {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase, this.name);
    } else {
      console.log(phrase);
    }
  }
}

let user1: Greetable;

user1 = {
  name: "Jack",

  greet(phrase: string) {
    console.log(phrase, this.name);
  },
};
user1.greet("hello");

const user2 = new Person();
user2.greet("Hi");
