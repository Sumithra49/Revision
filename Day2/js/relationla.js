function isGreater(num1, num2) {
  // Write your code here
  return num1 > num2;
}

// Test cases
console.log(isGreater(20, 10)); // Expected output: true
console.log(isGreater(10, 20)); // Expected output: false
console.log(isGreater(10, 10));

var num = 123;
var output = String(num);
console.log(typeof output);

let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

//Guess the Output for a and b: __________

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

//Guess the Output for **`arr1`** and **`arr2`**: __________

let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Guess the Output for obj1.age and obj2.age: __________
