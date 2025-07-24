function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

function maxProduct(nums: number[]): number {
  let max = 0;
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefix = 1;
      continue;
    }
    prefix = prefix * nums[i];
    max = prefix > max ? prefix : max;
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      suffix = 1;
      continue;
    }
    suffix = suffix * nums[i];
    max = suffix > max ? suffix : max;
  }
  return max;
}
console.log(maxProduct([-2, -1]));
