//Synchronous:it excute code line by line Synchronously if.e sequencily.operations are performed one after the other
console.log(9);
console.log(8);
console.log(7);

//Asynchronously:allows multiple tasks to run independently of each other.
console.log(10);
setTimeout(() => {
  console.log(45);
}, 3000);
console.log("done");

// How Asynchronous JavaScript Works Behind the Scenes
// ey components:
// ✔ Call Stack (Executes synchronous code)
// ✔ Web APIs (Handles asynchronous operations)
// ✔ Callback Queue (Stores async callbacks)
// ✔ Event Loop (Moves callbacks from Queue to Call Stack)
// ✔ Microtask Queue (Stores Promises & mutation observer callbacks)

//setTimeout() – Runs Once After a Delay
setTimeout(() => {
  console.log("Hello from setTimeout");
}, 2000);

//setInterval() – Runs Repeatedly at Intervals
// setInterval(() => {
//   console.log("Hello from setInterval");
// }, 1000);

//clearInterval() – Stops setInterval()
var count = 0;
const intervalId = setInterval(() => {
  console.log("Hello from setInterval");
  count++;

  if (count == 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

// //callback:function that is passed as an argument to another function and is intended to be executed or "called back" at a certain point in the execution of that function.
// // function name(callback) {
//     callback();
//   }

function dataC(callback) {
  setTimeout(() => {
    var data = [1, 2, 3, 4];
    callback(data);
  }, 2000);
}
function handle(data) {
  console.log("data received");
}
dataC(handle);
