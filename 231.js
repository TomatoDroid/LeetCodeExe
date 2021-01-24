/**
 * @param {number} n
 * @return {boolean}
 * 时间复杂度 O(1)
 * 只有2的幂次方符合 =》 x & -x === x
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  return (n & -n) === n;
};
/**
 * @param {number} n
 * @return {boolean}
 * 时间复杂度 O(1)
 * 只有2的幂次方符合 =》 x & (x-1) === 0
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  return (x & (x - 1)) === 0;
};
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(218));
console.log(isPowerOfTwo(1073741825));
