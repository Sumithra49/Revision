//method1:FlattenArray
const arr = [1, 2, [3, 4, 5, [6, 5, 7]]];

function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatten(arr));

//method2:group by
const groupBy = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
];
let key = "type";
// → { fruit: [{...}], veg: [{...}] }
let obj1 = {};
for (let i = 0; i < groupBy.length; i++) {
  let k = groupBy[i][key];
  if (!obj1[k]) {
    obj1[k] = [groupBy[i]];
  } else {
    obj1[k].push(arr[i]);
  }
}
console.log(obj1);
//method 3:deeply copy
const obj = { a: 2, b: { c: 3, c: 4, e: 4 } };

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
console.log(deepCopy(obj));
// Method 4: polyfillMap()

// Polyfill for map() to be added on Array.prototype.
let a = [1, 2, 3];

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let temp = callback(this[i], i, this);
    newArr.push(temp);
  }
  return newArr;
};
let output = a.myMap(function (e) {
  return e * 2;
});
console.log(output);

//method 5:
Array.prototype.polyfillReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = this;
  let accumulator;
  let startIndex;

  // Handle case when initialValue is provided
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // Handle case when array is empty and no initialValue is given
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.polyfillReduce((acc, curr) => acc + curr, 0);
console.log(sum);
