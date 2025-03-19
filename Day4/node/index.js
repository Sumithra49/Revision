const fs = require("fs");
// readFile:read asynchronously

fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error reading file");
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("done");

//file read synchronously
const data = fs.readFileSync("./text.txt", { encoding: "utf-8" });
console.log(data);
console.log("done");

//when write something asynchronous

fs.writeFile("./text.txt", "the is content", (err) => {
  if (err) {
    console.log("Error writing file");
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

//write synchronously

fs.writeFileSync("./text.txt", "the is content");
console.log("File written successfully");
