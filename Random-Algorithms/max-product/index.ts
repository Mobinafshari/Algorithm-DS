function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0];
  let currentMax = nums[0];
  let currentMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    if (n < 0) {
      [currentMax, currentMin] = [currentMin, currentMax];
    }

    currentMax = Math.max(n, currentMax * n);
    currentMin = Math.min(n, currentMin * n);

    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

console.log(maxProduct([2, -5, -2, -4, 3, 0, -2, -3, -4]));
