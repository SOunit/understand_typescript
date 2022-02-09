// const person: { name: string; age: number } = {
//   name: "Jack",
//   age: 38,
// };

// console.log(person.name);

enum Role {
  ADMIN,
  READ_ONLY = "READ_ONLY",
  AUTHER = 100,
  TEST,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Jack",
  age: 38,
  hobbies: ["a", "b"],
  role: [2, "author"],
};

// this is ok, TS can't detect push
// person.role.push("test");
// person.role[0] = 10;

console.log(person);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
