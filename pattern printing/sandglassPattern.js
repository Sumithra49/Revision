//Sandglass Star Pattern
function sandglassPattern(n) {
  // Upper half
  for (let i = 0; i < n; i++) {
    let line = "";

    // Add spaces
    for (let s = 0; s < i; s++) {
      line += " ";
    }

    // Add stars
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      line += "*";
    }

    console.log(line);
  }

  // Lower half
  for (let i = 1; i < n; i++) {
    let line = "";

    // Add spaces
    for (let s = 0; s < n - i - 1; s++) {
      line += " ";
    }

    // Add stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }
}

// Example usage
sandglassPattern(5);
// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
