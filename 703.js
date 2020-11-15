/**
 * 时间复杂度O(㏒k)
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = [];
    for (let num of nums) {
      this.add(num);
    }
  }

  add(val) {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this.up(this.minHeap.length - 1);
    } else {
      if (val > this.minHeap[0]) {
        this.minHeap[0] = val;
        this.down(0);
      }
    }
    return this.minHeap[0];
  }

  up(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.minHeap[index] < this.minHeap[parentIndex]) {
      [this.minHeap[parentIndex], this.minHeap[index]] = [
        this.minHeap[index],
        this.minHeap[parentIndex],
      ];
      this.up(parentIndex);
    }
  }

  down(index) {
    let to = index;
    // 左子树
    let leftIndex = 2 * (index + 1) - 1;
    if (
      leftIndex < this.minHeap.length &&
      this.minHeap[to] > this.minHeap[leftIndex]
    ) {
      to = leftIndex;
    }
    // 右子树
    let rightIndex = 2 * (index + 1);
    if (
      rightIndex < this.minHeap.length &&
      this.minHeap[to] > this.minHeap[rightIndex]
    ) {
      to = rightIndex;
    }

    if (to !== index) {
      [this.minHeap[to], this.minHeap[index]] = [
        this.minHeap[index],
        this.minHeap[to],
      ];
      this.down(to);
    }
  }
}

const k = new KthLargest(7, [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1]);

// console.log(k.add(-1));
// console.log(k.add(1));
// console.log(k.add(-2));
// console.log(k.add(-4));
// console.log(k.add(3));
