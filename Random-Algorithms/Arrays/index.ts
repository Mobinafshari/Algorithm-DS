// function twoSum(nums: number[], target: number): number[] {
//   `cons`t map = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement)!, i];
//     }
//     map.set(nums[i], i);
//   }

//   return [-1, -1];
// }

// function maxProduct(nums: number[]): number {
//   let max = 0;
//   let prefix = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       prefix = 1;
//       continue;
//     }
//     prefix = prefix * nums[i];
//     max = prefix > max ? prefix : max;
//   }
//   let suffix = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       suffix = 1;
//       continue;
//     }
//     suffix = suffix * nums[i];
//     max = suffix > max ? suffix : max;
//   }
//   return max;
// }
function maxProduct(nums: number[]): number {
  let max = Infinity * -1;
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      prefix = 1;
      max = Math.max(max, 0);
      continue;
    }
    prefix *= nums[i];
    max = Math.max(max, prefix);
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      suffix = 1;
      max = Math.max(max, 0);
      continue;
    }
    suffix *= nums[i];
    max = Math.max(max, suffix);
  }
  return max;
}

// function maxProfit(prices: number[]): number {
//   let buy = Infinity;
//   let sell = 0;
//   let profit = 0;
//   for (const price of prices) {
//     if (price < buy) {
//       buy = price;
//       sell = 0;
//       continue;
//     } else if (price > sell) {
//       sell = price;
//       profit = sell - buy > profit ? sell - buy : profit;
//       continue;
//     }
//   }
//   return profit;
// }
function maxProfit(prices: number[]): number {
  let profit = 0;
  let sell = 0;
  let buy = Infinity;
  for (const price of prices) {
    if (price < buy) {
      buy = price;
      sell = 0;
      continue;
    } else if (price > sell) {
      sell = price;
      profit = Math.max(profit, sell - buy);
    }
  }
  return profit;
}

// function productExceptSelf(nums: number[]): number[] {
//   const n = nums.length;
//   const result: number[] = new Array(n).fill(1);

//   let prefix = 1;
//   for (let i = 0; i < n; i++) {
//     result[i] = prefix;
//     prefix *= nums[i];
//   }

//   let suffix = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return result;
// }
function productExceptSelf(nums: number[]): number[] {
  let res: number[] = new Array(nums.length).fill(null);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }
  return res;
}

// function maxSubArray(nums: number[]): number {
//   let max = Infinity * -1;
//   let sum = 0;
//   for (const number of nums) {
//     if (number > max) {
//       sum += number;
//       max = sum;
//     } else if (sum + number < 0) {
//       sum = 0;
//     } else {
//       sum += number;
//       max = sum > max ? sum : max;
//     }
//   }
//   return max;
// }
function maxSubArray(nums: number[]): number {
  let max = Infinity * -1;
  let sum = 0;
  for (const number of nums) {
    if (number > max) {
      sum = Math.max(number, sum + number);
      max = Math.max(sum, number);
    } else if (number + sum < 0) {
      sum = 0;
    } else {
      sum += number;
      max = Math.max(max, sum);
    }
  }
  return max;
}

// function containsDuplicate(nums: number[]): boolean {
//   const set = new Set(nums);
//   return set.size !== nums.length;
// }
function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size !== nums.length;
}

function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}
// function sortArray(nums: number[]): number[] {
//   return sort(nums);

//   function sort(numbers: number[]): number[] {
//     if (numbers.length < 2) return numbers;

//     const middle = Math.floor(numbers.length / 2);
//     const left = numbers.slice(0, middle);
//     const right = numbers.slice(middle);

//     const sortedLeft = sort(left);
//     const sortedRight = sort(right);

//     return merge(sortedLeft, sortedRight);
//   }

//   function merge(arrOne: number[], arrTwo: number[]): number[] {
//     const res: number[] = [];
//     let i = 0;
//     let j = 0;

//     while (i < arrOne.length && j < arrTwo.length) {
//       if (arrOne[i] <= arrTwo[j]) {
//         res.push(arrOne[i]);
//         i++;
//       } else {
//         res.push(arrTwo[j]);
//         j++;
//       }
//     }

//     while (i < arrOne.length) {
//       res.push(arrOne[i]);
//       i++;
//     }

//     while (j < arrTwo.length) {
//       res.push(arrTwo[j]);
//       j++;
//     }

//     return res;
//   }
// }
function sortArray(nums: number[]): number[] {
  return sort(nums);

  function sort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(sort(left), sort(right));
  }

  function merge(arrOne: number[], arrTwo: number[]): number[] {
    const res: number[] = [];
    while (arrOne.length && arrTwo.length) {
      if (arrOne[0] < arrTwo[0]) {
        res.push(arrOne.shift()!);
      } else {
        res.push(arrTwo.shift()!);
      }
    }
    return [...res ,...arrOne, ...arrTwo]; 
  }
}


function subarraySum(nums: number[], k: number): number {
  const prefixMap = new Map<number, number>();
  let sum = 0;
  let count = 0;

  prefixMap.set(0, 1);
  for (const num of nums) {
    sum += num;
    const remain = sum - k;
    if (prefixMap.has(remain)) {
      count += prefixMap.get(remain)!;
    }
    prefixMap.set(sum, (prefixMap.get(sum) ?? 0) + 1);
  }
  console.log(prefixMap);
  return count;
}
