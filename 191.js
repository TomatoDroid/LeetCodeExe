/**
 * @param {number} n - a positive integer
 * @return {number}
 * 时间复杂度O(1) 但是需要循环32次
 * x & 1 === （1 || 0） 来判断奇偶
 */
// var hammingWeight = function (n) {
//   let res = 0;
//   let mask = 1;
//   for (let i = 0; i < 32; i++) {
//     if (n & mask) {
//       res++;
//     }
//     mask = mask << 1;
//   }
//   return res
// };

/**
 * @param {number} n - a positive integer
 * @return {number}
 * 时间复杂度O(1) 有几个1循环几次
 * x & (x-1)  清零最低位的1
 */
var hammingWeight = function (n) {
  let res = 0;
  for (; n; n &= n - 1) {
    res++;
  }
  return res;
};
