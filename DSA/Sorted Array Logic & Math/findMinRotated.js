//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/1655742628/
var findMin = function (nums) {
  let minVal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i];
    }
  }
  return minVal;
};
