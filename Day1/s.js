var obj = {
  a: 10,
  b: {
    c: 20,
    d: { e: 5 },
  },
};

//copy of the object
const copy = JSON.parse(JSON.stringify(obj));

//shallow copy of the object
const shallowCopy = { ...obj };
console.log(shallowCopy);

// const copy = obj.reduce(() => {
//   let res = obj;
//   return res;
// });

var arr = [1, 2, 3, 4, 5, 6];
//double the value
const doubledArray = arr.map((num) => num * 2);
console.log(doubledArray);
//anotherway
var output = [];

for (let i = 0; i < arr.length; i++) {
  output.push(arr[i] * 2);
}

console.log(output); // Output: [2, 4, 6, 8, 10, 12]

//flatter array
const arr1 = [1, 2, 3, 4, [5, 6, [7, 8]]];
function flattenArray(arr1) {
  let res = [];
  function flatt(ele) {
    if (Array.isArray(ele)) {
      for (let i = 0; i < ele.length; i++) {
        flatt(ele[i]);
      }
    } else {
      res.push(ele);
    }
  }
  flatt(arr1);
  return res;
}
console.log(flattenArray(arr1));

function flattenArray1(arr1) {
  return arr1.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray1(val) : val),
    []
  );
}
console.log(flattenArray1(arr1));

//copy of array:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = [...array];
console.log(result);
const r = JSON.parse(JSON.stringify(array));
console.log(r);

const b = [1, 2, 3, 2, 3, 23, 5, 4, 5];
function rem(b) {
  return [...new Set(b)];
}
console.log(rem(b));

function dup(b) {
  let un = [];
  for (let item of b) {
    if (!un.includes(item)) {
      un.push(item);
    }
  }
  return un;
}
console.log(dup(b));
