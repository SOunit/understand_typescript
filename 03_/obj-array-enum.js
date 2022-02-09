"use strict";
// const person: { name: string; age: number } = {
//   name: "Jack",
//   age: 38,
// };
// console.log(person.name);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role[Role["AUTHER"] = 100] = "AUTHER";
    Role[Role["TEST"] = 101] = "TEST";
})(Role || (Role = {}));
const person = {
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
