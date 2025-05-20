// function makeFunctions() {
//   let funcs = [];
//   for (var i = 0; i < 3; i++) {
//     funcs[i] = function () {
//       return i;
//     };
//   }
//   return funcs;
// }

// const funcs = makeFunctions();
// console.log(funcs[0]()); // What is the output? 3
// console.log(funcs[1]()); // What is the output?3
// console.log(funcs[2]()); // What is the output?3
// // function makeFunctions() {
// //   let funcs = [];
// //   for (let i = 0; i < 3; i++) {
// //     funcs[i] = function () {
// //       return i;
// //     };
// //   }
// //   return funcs;//0 1 2
// // }

// function delayLog(message, delay) {
//   setTimeout(function () {
//     console.log(message); //A,B,C
//   }, delay);
// }

// const messages = ["A", "B", "C"];
// for (var i = 0; i < messages.length; i++) delayLog(messages[i], 1000);

// function makeFunction() {
//   let func = [];
//   for (var i = 0; i < 3; i++) {
//     func[i] = (() => {
//       //no passing parameter that why giving 333 otput when pass argument (i) the output is 0,1,2
//       return function () {
//         return i;
//       };
//     })(i);
//   }
//   return func;
// }

// const func = makeFunction();
// console.log(func[0]()); // ? 3
// console.log(func[1]()); // ?  3
// console.log(func[2]()); // ? 3
// console.log(a);//reference error :a is not defined
// if (true) {
//   a = 10;
// }

// function foo() {
//   a = 10;
// }
// foo();

// console.log(a);//10 because strict mode
// nside foo(), you assign a = 10; without declaring a with var, let, or const.

// In non-strict mode, this implicitly creates a global variable a.

// So after calling foo(), the global variable a exists and has the value 10.

// console.log(a);//reference error
// a = 10;

// a = 10;
// console.log(a);//10
//console.log(this); //{}

//use usestrict
// ("use strict");

// function foo() {
//   console.log(this);
// }
// foo.call(10); //[Number:10]
// without using use strict also getting [number:10]

// "use strict";
// function fun() {
//   return this;
// }
// console.log(fun.call("HI") === "HI");//true

// sayHI();
// let sayHI = function () {
//   console.log("SayHI declare");
// };
// sayHI();
// function sayHI() {
//   console.log("SayHI expression");
// }
// sayHI();
//Syntax error  above sayHI

//excution: it will take two phases :creation,execution phase

// sayHI(); //sayHI declare
// var sayHI = () => {
//   console.log("SayHI expression");
// };
// sayHI(); //sayHI expression
// function sayHI() {
//   console.log("SayHI declare");
// }
// sayHI(); //sayHI expression

//another

// sayHI(); //sayHI declare
// function sayHI() {
//   console.log("SayHI declare");
// }
// sayHI(); //sayHI declare
// var sayHI = () => {
//   console.log("SayHI expression");
// };
// sayHI(); //sayHI expression
// another problem
// const obj = {
//   value: 1,
//   arrowFunc: () => console.log(this.value),
// };
// obj.arrowFunc();//undefined

//Anothr
// function foo() {
//   const obj = {
//     value: 1,
//     arrowFunc: () => console.log(this.value),
//   };
//   obj.arrowFunc();
// }
// foo.call();//undefined

//another
// function foo() {
//   const obj = {
//     value: 1,
//     arrowFunc: () => console.log(this.value),
//   };
//   obj.arrowFunc();
// }
// foo.call({ value: 9 }); //9

//Another
// function foo() {
//   const obj = {
//     value: 1,
//     arrowFunc: () => console.log(this.value),
//   };
//   obj.arrowFunc();
// }
// let obj = { hi: foo };
// let ans = obj.hi;
// ans(); //undefined

//another

// function foo() {
//   const obj = {
//     value: 1,
//     arrowFunc: () => console.log(this),
//   };
//   obj.arrowFunc();
// }
// let obj = { hi: foo };
// obj.hi();//{ hi: [Function: foo] }

//step 1:check where and how the function is invoked
//step2: check if it is a normal function or not
//normal function:
//1.normal calling of a function=>window/global object
//foo()
//foo.call(); window
//foo.apply();window

//2. calling a function as a method of an obj
//let obj2={hi:foo}
//let ans2=obj.hi
//obj2.hi();implicit binding of this=>this=>obj2
//3.calling a function using .call and .apply

//obj2.hi.call({});explicit binding of this
//foo.apply({value:10});//explicit binding

//4. Hard binding of this using .bind method

//let newFun=foo.bind({value:15})
//newFun();this=>obj passed as an argument
