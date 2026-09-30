// Part A - Object

let student = {
  name: "Devduttsinh",
  age: 17,
  isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);


// Part B - Array

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(numbers[0]);
console.log(numbers[4]);

console.log(mixed);

/*
It is better to keep arrays with a single data type
because the data becomes easier to understand and work with.
*/


// Part C - Function

function greet(name) {
  return "Hello, " + name + "!";
}

let message1 = greet("Rahul");
let message2 = greet("Amit");

console.log(message1);
console.log(message2);