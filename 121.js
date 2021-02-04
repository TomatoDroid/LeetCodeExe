/**
 * @param {number[]} prices
 * @return {number}
 * 双重循环 超时
 */
// var maxProfit = function (prices) {
//   let res = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       res = Math.max(res, prices[j] - prices[i]);
//     }
//   }
//   return res;
// };

/**
 * @param {number[]} prices
 * @return {number}
 *  动态规划
 */
// var maxProfit = function (prices) {
//   const dp = Array(prices.length).fill([]);
//   dp[0][0] = 0;
//   dp[0][1] = -prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0]);
//     dp[i][1] = Math.max(-prices[i], dp[i - 1][1]);
//   }
//   return dp[prices.length - 1][0];
// };

/**
 * @param {number[]} prices
 * @return {number}
 *  动态规划 优化空间
 */
var maxProfit = function (prices) {
  const dp = [[], []];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let x = i % 2;
    let y = (i - 1) % 2;
    dp[x][0] = Math.max(prices[i] + dp[y][1], dp[y][0]);
    dp[x][1] = Math.max(-prices[i], dp[y][1]);
  }
  return dp[(prices.length - 1) & 1][0];
};
console.log(maxProfit([1, 2]));
