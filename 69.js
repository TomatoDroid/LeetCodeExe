/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 1;
  let right = x;
  let res = null;
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    if (m === x / m) {
      return m;
    } else if (m > x / m) {
      right = m - 1;
    } else {
      left = m + 1;
      res = m;
    }
  }
  return res;
};

console.log(mySqrt(20));
