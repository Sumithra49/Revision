//pascalTriangle
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1
function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    // Spaces before the numbers (for triangle shape)
    for (let s = 0; s < n - i - 1; s++) {
      line += " ";
    }

    let value = 1;

    // Generate row
    for (let j = 0; j <= i; j++) {
      line += value + " ";
      value = (value * (i - j)) / (j + 1); // Pascal's logic
    }

    console.log(line);
  }
}

// Example usage
pascalTriangle(5);
