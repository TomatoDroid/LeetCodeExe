/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * O(n)
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map[res] !== undefined) {
      return [map[res], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
