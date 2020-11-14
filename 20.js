/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (const code of s) {
    if (!map[code]) {
      stack.push(code);
    } else {
      if (stack[stack.length - 1] !== map[code]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("(){}[]"));
