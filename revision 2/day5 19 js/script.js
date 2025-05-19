// 1.flattenArray/Object

// 2.copy of object/array
// 3.polyfill
// 4.grouping of objects

// 1.flattenArray
const arr = [1, 2, [3, 9, [5, 6]], [7, 8], 9];
function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
      //res=[...res,...flatten(arr[i])]
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatten(arr));

let obj = {
  name: "sumithra",
  address: {
    state: "AP",
    city: "Chittoor",
    PIN: 123456,
    apartment: {
      block: "A",
      flat: 3,
      room: 101,
    },
  },
};
//output:
function flattenObj(obj, prefix = "") {
  let resu = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      let temp;
      if (prefix) {
        temp = flattenObj(obj[key], prefix + "_" + key);
      } else {
        temp = flattenObj(obj[key], key);
      }

      // temp = flattenObj(obj[key], key);
      for (let k in temp) {
        resu[k] = temp[k];
      }
    } else {
      if (prefix) {
        resu[prefix + "_" + key] = obj[key];
      } else {
        resu[key] = obj[key];
      }
    }
  }
  return resu;
}

console.log(flattenObj(obj));

//output

// [
//   1, 2, 3, 9, 5,
//   6, 7, 8, 9
// ]
// {
//   name: 'sumithra',
//   address_state: 'AP',
//   address_city: 'Chittoor',
//   address_PIN: 123456,
//   address_apartment_block: 'A',
//   address_apartment_flat: 3,
//   address_apartment_room: 101
// }

//group of object or array
//array of objects
let arr1 = [
  { name: "Rani", age: 23, city: "bangalore" },
  { name: "Raja", age: 26, city: "Delhi" },
  { name: "Naga", age: 24, city: "bangalore" },
];
let result = {};
for (let i = 0; i < arr1.length; i++) {
  let key = arr1[i].city;
  if (!result[key]) {
    result[key] = [arr1[i]];
  } else {
    result[key].push(arr1[i]);
  }
}
console.log(result);
// //{
//   bangalore: [
// ty: 'bangalore' },
//     { name: 'Naga', age: 24, city: 'bangalore' }
//   ],
//   Delhi: [ { name: 'Raja', age: 26, city: 'Delhi' } ]
// }

//Polyfill
//class
// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   //methods
//   makeSound() {
//     console.log(this.sound);
//   }
// }
// let cat = new Animal("tube", "mav");
// cat.makeSound();
// Constructor function
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

// Method added using prototype
Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

// Create an instance
let cat = new Animal("tube", "mav");
cat.makeSound(); // Output: mav

//polyfill
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
