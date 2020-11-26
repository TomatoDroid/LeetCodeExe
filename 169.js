/**
 * @param {number[]} nums
 * @return {number}
 * map 时间空间复杂度O(N)
 */
// var majorityElement = function (nums) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]] !== undefined) {
//       map[nums[i]]++;
//     } else {
//       map[nums[i]] = 1;
//     }
//     if (map[nums[i]] > nums.length / 2) {
//       return nums[i];
//     }
//   }
// };

/**
 * @param {*} nums
 * 排序 时间复杂度O(NlogN) 排序后，n/2的数一定是众数
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

/**
 * @param {*} nums
 * 分治
 */
var majorityElement = function (nums) {
  return majorityElementRec(nums, 0, nums.length - 1);
};

function majorityElementRec(nums, lo, hi) {
  if (lo === hi) {
    return nums[lo];
  }

  const middle = Math.floor((hi - lo) / 2) + lo;
  const left = majorityElementRec(nums, lo, middle);
  const right = majorityElementRec(nums, middle + 1, hi);

  if (left === right) {
    return left;
  }

  const leftCount = countInRange(nums, left, lo, hi);
  const rightCount = countInRange(nums, right, lo, hi);

  return leftCount > rightCount ? left : right;
}

function countInRange(nums, num, lo, hi) {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
