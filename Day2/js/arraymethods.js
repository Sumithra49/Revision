// push:adds one or more elements to the end of an array,return new arraylength
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(10);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 10]

// pop:aremove last elements to the end of an array,return deleted elemnt

arr.pop();
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

// shift:removes the first element from an array and returns that element

arr.shift();

console.log(arr); // [2, 3, 4, 5, 6, 7]

// unshift:adds one or more elements to the beginning of an array and returns the new length of the array.

arr.unshift(23);
console.log(arr); // [23, 2, 3, 4, 5, 6, 7]

// slice:extracts a section of an array and returns a new arra,extract two elemnet start and end index
console.log(arr.slice(2, 5)); // [3, 4, 5]

// concat:combines two or more arrays and returns a new array
console.log(arr.concat([8, 9, 10])); // [23, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// reverse:reverses the order of the elements in an array
console.log(arr.reverse()); // [7, 6,  5, 4,3, 2, 23]

//indexOf():The indexOf() method returns the first index at which a given element can be found in an array
console.log(arr.indexOf(6)); //1

//includes():checks if an array includes a certain element and returns true or false.
console.log(arr.includes(34)); //false
console.log(arr.includes(2)); //true

//join(): joins all elements of an array into a string, using a specified separator.
console.log(arr.join(", ")); // 23, 2, 3, 4, 5, 6, 7
//### splice():The splice() method changes the contents of an array by removing, replacing, or adding elements.
// start index, the number of elements to remove, and optional elements add
arr.splice(2, 0, 10, 11);
console.log(arr); // [23, 2, 10, 11, 3, 4, 5, 6, 7]
arr.splice(5, 2);
console.log(arr); // [23, 2, 10, 11, 7]

// forEach(): executes a provided function once for each array element.
arr.forEach((element) => {
  console.log(element);
});

//Higher order functions: take other functions as arguments or return a function

//map(): function to each element in an array and returns a new array.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = arr2.map((num) => num * num);
console.log(double); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//filter():creates a new array with elements that satisfy a given condition.
const even = arr2.filter((i) => i % 2 == 0);
console.log(even); // [2, 4, 6, 8, 10]

//reduce(): function to an accumulator and each element of the array to return a single value.
const sum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); //5

//forEach():executes a provided function once per array element
const ele = arr2.forEach((i) => console.log(i));

//sort():placed order format
const arr3 = [3, 2, 5, 1, 4];
arr3.sort((a, b) => a - b);
console.log(arr3); // [1, 2, 3, 4, 5]
