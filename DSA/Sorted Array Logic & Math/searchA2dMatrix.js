//https://leetcode.com/problems/search-a-2d-matrix/submissions/1655738739/
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
