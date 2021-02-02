/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划（终极版，优化内存）
 */
// var maxProduct = function (nums) {
//   if (nums === null) return 0;
//   const dp = [[], []];
//   dp[0][0] = nums[0];
//   dp[0][1] = nums[0];
//   let res = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const x = i % 2;
//     const y = (i - 1) % 2;
//     dp[x][0] = Math.max(dp[y][0] * nums[i], dp[y][1] * nums[i], nums[i]);
//     dp[x][1] = Math.min(dp[y][0] * nums[i], dp[y][1] * nums[i], nums[i]);
//     res = Math.max(dp[x][0], res);
//   }
//   return res;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划渐进版
 */
var maxProduct = function (nums) {
  const dp = [[]];
  dp[0][0] = nums[0];
  dp[0][1] = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp.push([]);
    dp[i][0] = Math.max(
      dp[i - 1][0] * nums[i],
      dp[i - 1][1] * nums[i],
      nums[i]
    );
    dp[i][1] = Math.min(
      dp[i - 1][0] * nums[i],
      dp[i - 1][1] * nums[i],
      nums[i]
    );
    res = Math.max(res, dp[i][0]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 递归（超时，理解思路）
 */
// let res = null;
// var maxProduct = function (nums) {
//   res = nums[0];
//   recursion(nums, 0, nums[0]);
//   return res;
// };

// function recursion(nums, i, currentValue) {
//   if (i >= nums.length - 1) {
//     res = Math.max(res, currentValue);
//     return;
//   }
//   res = Math.max(res, currentValue);
//   recursion(nums, i + 1, nums[i + 1] * currentValue);
//   recursion(nums, i + 1, nums[i + 1]);
// }

console.log(maxProduct([2, 3, -2, 4, 8]));
