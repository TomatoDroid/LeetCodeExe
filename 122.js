/**
 * @param {number[]} prices
 * @return {number}
 * 贪心 时间O(n)
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      res += prices[i + 1] - prices[i];
    }
  }
  return res;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
