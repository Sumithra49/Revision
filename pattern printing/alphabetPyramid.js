//Alphabetic pyramid
function alphabetPyramid(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    // Print leading spaces
    for (let s = 0; s < n - i - 1; s++) {
      line += " ";
    }

    // Print ascending alphabets
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65 + j);
    }

    // Print descending alphabets
    for (let j = i - 1; j >= 0; j--) {
      line += String.fromCharCode(65 + j);
    }

    console.log(line);
  }
}

// Example usage
alphabetPyramid(5);
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
