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

function maxProfit(prices: number[]): number {
  let buy = Infinity;
  let sell = 0;
  let profit = 0;
  for (const price of prices) {
    if (price < buy) {
      buy = price;
      sell = 0;
      continue;
    } else if (price > sell) {
      sell = price;
      profit = sell - buy > profit ? sell - buy : profit;
      continue;
    }
  }
  return profit;
}

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

function maxSubArray(nums: number[]): number {
  let max = Infinity * -1;
  let sum = 0;
  for (const number of nums) {
    if (number > max) {
      sum += number;
      max = sum;
    } else if (sum + number < 0) {
      sum = 0;
    } else {
      sum += number;
      max = sum  > max ? sum  : max
    }
  }
  return max;
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
