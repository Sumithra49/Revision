// ### **Palindrome Check**

// Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same forward and backward).

// - **Requirements**:
//     - Ignore spaces, punctuation, and case differences.

// **Example**:
function isPalindrome(str) {
  let s = str
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .join("");

  console.log(s);
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s.charAt(i);
  }
  return s === rev;
}
const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true
