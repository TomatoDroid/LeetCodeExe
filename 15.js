/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间复杂度O(n²) 排序+双指针
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }
        while (R > L && nums[R] === nums[R - 1]) {
          R--;
        }
        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else {
        L++;
      }
    }
  }
  return res;
};

// console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
console.log(JSON.stringify(threeSum([1, -1, -1, 0])));
