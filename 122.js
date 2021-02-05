/**
 * @param {number[]} prices
 * @return {number}
 * 贪心 时间O(n)
 */
// var maxProfit = function (prices) {
//   let res = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     if (prices[i] < prices[i + 1]) {
//       res += prices[i + 1] - prices[i];
//     }
//   }
//   return res;
// };

/**
 * @param {number[]} prices
 * @return {number}
 * 动态规划
 */
var maxProfit = function (prices) {
  let res = 0;
  const dp = [[], []];
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    let x = i % 2;
    let y = (i - 1) % 2;
    dp[x][0] = Math.max(dp[y][0], dp[y][1] + prices[i]);
    dp[x][1] = Math.max(dp[y][1], dp[y][0] - prices[i]);
    res = Math.max(res, dp[x][0]);
  }
  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
