// Write a function `mergeObjects` that accepts two objects and merges them into one. If both objects have a property with the same key, the second object’s property value should overwrite the first’s.

// **Example**:

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }
