//The spread operator in JavaScript allows us to expand an array or object in place.
const arr = [1, 2, 3, 4, 5, 6];
const newArr = [...arr, 5, 6, 7];
console.log(newArr);

const obj = {
  name: "harik",
  age: 25,
};
const newObj = { ...obj, city: "Delhi" };
console.log(newObj);
//The rest operator in JavaScript allows us to collect multiple function arguments into an array
function names(first, second, ...rest) {
  console.log(first, second, rest);
}
names("red", "colo", " blue", " yellow");

// Write a function that takes in two objects and merges them together using the spread operator. The function should return the merged object.

function mergedObject(first, second) {
  return { ...first, ...second };
}
const first = { name: "ramu", age: 45 };
const second = { city: "raju", ph: 34 };
console.log(mergedObject(first, second));

// Write a function that takes in two arrays and merges them together using the spread operator. The function should return the merged array.

function mergedArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergedArray(arr1, arr2));

// Write a function that takes in any number of arguments and gives back an array of all the arguments it is invoked with.
function collectArguments(...args) {
  return args;
}

// Example Usage:
console.log(collectArguments(1, "hello", true, [2, 3], { key: "value" }));
