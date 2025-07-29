function frequencySort(nums: number[]): number[] {
  const countMap = new Map<number, number>();
  const res: number[] = [];
  for (const number of nums) {
    countMap.set(number, (countMap.get(number) ?? 0) + 1);
  }
  const sortedFrequencies = [...countMap].sort((a, b) => a[1] - b[1]);
  for (const item of sortedFrequencies) {
    let count = item[1];
    while (count !== 0) {
      res.push(item[0]);
      count--;
    }
  }
  return res;
}

function findMin(nums: number[]): number {
  let right = nums.length - 1;
  let left = 0;
  while (right >= left) {
    const middle = Math.floor((right + left) / 2);
    if (middle === 1) return nums[0];
    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1];
    } else if (nums[middle] < nums[middle + 1]) {
      right = middle;
    }
  }
}
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
