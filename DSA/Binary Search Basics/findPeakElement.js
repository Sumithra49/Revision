//leetcode.com/problems/find-peak-element/submissions/1655733855/
https: var findPeakElement = function (nums) {
  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  return index;
};
