var a = 50;
var b = 30;
function sum(a, b) {
  return a + b;
}

console.log(sum(50, 30));

//arrow function

const su = (a, b) => {
  return a + b;
};

console.log(su(59, 10));
// 1. Write a JavaScript function named `multiplyByTwo` that takes in a number as a parameter and returns the number multiplied by 2. You need to use arrow function with implicit returns;

// your code here
// function multiplyByTwo(number){
//     return number*2;
//   }

const multiplyByTwo = (number) => {
  return number * 2;
};

// test case [you may uncomment these]
const result = multiplyByTwo(5);
console.log(result); // Outputs: 10

// 2. Write a Javascript function named `getStudentObject` that takes in a name & age; it returns an object with property name & age; You need to use arrow function with implicit returns;

// your code here
const getStudentObject = (name, age) => {
  return { name, age };
};

// test case [you may uncomment these]
const student = getStudentObject("Alice", 22);
console.log(student); // Outputs: { name: 'Alice', age: 22 }
