//Write a function countVowelsAndConsonants that accepts a string and returns an object with the count of vowels and consonants.
// - **Requirements**:
//     - Ignore spaces and non-alphabetical characters.
//     - Treat both uppercase and lowercase letters as the same.

function countVowelsAndConsonants(s) {
  let vowels = 0;
  let consonants = 0;
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) >= "a" && str.charAt(i) <= "z") {
      if (
        str.charAt(i) === "a" ||
        str.charAt(i) === "e" ||
        str.charAt(i) === "i" ||
        str.charAt(i) === "o" ||
        str.charAt(i) === "u"
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return { vowels, consonants };
}
const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
