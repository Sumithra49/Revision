// ### **Deep Copy of an Object**

// Write a function `deepCopy` that accepts an object and returns a deep copy of that object.

// - **Requirements**:
//     - If the object contains nested objects, make sure the nested objects are also copied and not referenced.
const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001,
  },
};
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }
