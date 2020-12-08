/**
 * @param {number[]} bills
 * @return {boolean}
 * 时间复杂度O(n)
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    }
    if (bill === 10) {
      if (five >= 1) {
        five--;
        ten++;
      } else {
        return false;
      }
    }
    if (bill === 20) {
      if (ten >= 1 && five >= 1) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
