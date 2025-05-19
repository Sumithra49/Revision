// ### **Reverse Words in a String**

// Write a function `reverseWords` that takes a string, and returns the string with each word reversed, while keeping the word order the same.

// - **Requirements**:
//     - Consider words to be separated by spaces.

// **Example**:

function reverseWords(str) {
  let rev = "";
  let s = str.split(" ");
  for (let i = 0; i < s.length; i++) {
    rev += s[i].split("").reverse().join("");
    if (i !== s.length - 1) {
      rev += " ";
    }
  }
  return rev;
}

const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"
