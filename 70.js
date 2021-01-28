/**
 * @param {number} n
 * @return {number}
 * 递归+记忆化
 */
// var climbStairs = function (n) {
//   if (n <= 2) {
//     return n;
//   }
//   const mome = [];
//   mome[0] = 0;
//   mome[1] = 1;
//   mome[2] = 2;
//   function resursion(step) {
//     if (mome[step]) {
//       return mome[step];
//     }
//     return (mome[step] = resursion(step - 1) + resursion(step - 2));
//   }
//   resursion(n);
//   return mome[n];
// };

/**
 * @param {number} n
 * @return {number}
 * 递推
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  const mome = [];
  mome[1] = 1;
  mome[2] = 2;
  for (let i = 3; i <= n; i++) {
    mome[i] = mome[i - 2] + mome[i - 1];
  }
  return mome[n];
};

console.log(climbStairs(4));
