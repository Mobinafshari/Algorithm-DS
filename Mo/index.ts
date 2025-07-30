function frequencySort(nums: number[]): number[] {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  return nums.sort((a, b) => {
    const fa = freq.get(a)!;
    const fb = freq.get(b)!;
    if (fa !== fb) {
      return fa - fb;
    }
    return b - a;
  });
}

/*
  1.Assumptions :

  1-Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 

  2-or example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
  3-Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
  n == nums.length
  1 <= n <= 5000
  -5000 <= nums[i] <= 5000
  All the integers of nums are unique.
  nums is sorted and rotated between 1 and n times.

  2.Requirements :
  1-Given the sorted rotated array nums of unique elements, return the minimum element of this array.
  2-You must write an algorithm that runs in O(log n) time. => binary search
  Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

  3-Corner case :
  1-empty array
  
  
  4.Complexities :
  time ===> O(logn)
  space ===> O(1)
*/

function findMin(nums: number[]): number {
  let right = nums.length - 1;
  let left = 0;
  while (right >= left) {
    const middle = Math.floor((left + right) / 2);
    const num = nums[middle];
    if (right === 0 && left === 0) return num;
    if (num > nums[middle + 1]) {
      return nums[middle + 1];
    }
    if (num > nums[right]) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return -1;
}
console.log(findMin([11, 13, 15, 17]));
