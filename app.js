// const person: { name: string; age: number } = {
//   name: "Jack",
//   age: 38,
// };
// console.log(person.name);
var person = {
    name: "Jack",
    age: 38,
    hobbies: ["a", "b"],
    role: [2, "author"]
};
console.log(person.name);
person.role.push("test");
person.role[0] = 10;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
