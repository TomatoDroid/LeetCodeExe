/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 时间复杂度是 O(n^3)，排序后，可以使用双指针来省掉一层循环
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let L = j + 1;
      let R = nums.length - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
          while (L < R && nums[L] === nums[L + 1]) {
            L++;
          }
          while (L < R && nums[R] === nums[R - 1]) {
            R--;
          }
          L++;
          R--;
        } else if (sum < target) {
          L++;
        } else {
          R--;
        }
      }
    }
  }
  return res;
};

console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
