/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const list = [];
  _gen(list, 0, 0, n, '');
  return list;
};

function _gen(subList, left, right, n, result) {
  if (left === n && right === n) {
    subList.push(result);
    return;
  }
  if (left < n) {
    _gen(subList, left + 1, right, n, result + "(");
  }
  if (right < n && left > right) {
    _gen(subList, left, right + 1, n, result + ")");
  }
}

console.log(generateParenthesis(3));

