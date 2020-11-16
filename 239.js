/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 固定窗口，最大值两个条件，所以不需要使用优先队列，使用双端队列即刻
 * 时间复杂度O(N)
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) {
    return [];
  }
  const window = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    // 固定窗口
    if (i >= k && window[0] <= i - k) {
      window.shift();
    }
    // 比较新元素与window窗口中的值，保持window[0]为永远为最大值
    while (nums[window[window.length - 1]] <= nums[i]) {
      window.pop();
    }
    window.push(i);
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
