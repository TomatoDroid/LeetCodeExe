/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  if (num === 0) {
    return [0];
  }
  let res = [0];
  for (let i = 1; i <= num; i++) {
    let count = 0;
    let j = i;
    while (j > 0) {
      count++;
      j &= j - 1;
    }
    res.push(count);
  }
  return res;
};

console.log(countBits(2));
console.log(countBits(5));
