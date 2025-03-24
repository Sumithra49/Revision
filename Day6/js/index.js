//sort the array using inbuilt functions
const arr = [1, 10, 11, 2, 3];
function sortA(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortA(arr));

//bubble sort
function arraySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(arraySort(arr));

//reverse the string using inbuilt functions

const str = "sumithra";
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse(str));

//reverse the string using a loop
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString(str));

//min,max
function find(arr) {
  const Max = Math.max(...arr);
  const Min = Math.min(...arr);
  return [Min, Max];
}
console.log(find(arr));

//using loop
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log(findMinMax(arr));

function transformArray(arr) {
  let zeros = 0;
  let ones = 0;

  for (let num of arr) {
    if (num === 0) zeros++;
    else ones++;
  }

  return Array(zeros).fill(0).concat(Array(ones).fill(1));
}

console.log(transformArray([0, 1, 1, 0, 1, 0])); // Output: [0, 0, 0, 1, 1, 1]

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

// Test:
const input = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(input)); // Output: [1, 2, 3, 4, 5, 6]
