// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
const item = [
  { type: "fruit", name: "mango" },
  { type: "veg", name: "brinjal" },
  { type: "fruit", name: "apple" },
];
//  for(let i=0;i<item.length;i++){
//      if(item[i].type==="fruit"){
//          console.log(item[i].name);

let res = {};
for (let i = 0; i < item.length; i++) {
  if (item[i].type !== "fruit") {
    res[item[i].name] = item[i].type;
  }
}
console.log(res);
