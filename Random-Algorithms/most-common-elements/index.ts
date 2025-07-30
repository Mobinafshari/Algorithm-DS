/*
  1.Assumptions :
  1-Given an array of integers numbers and a number k
  1 <= numbers.length <= 1000
  -10,000 <= numbers[i] <= 10,000
  1 <= k <= Number of unique elements in numbers
  The solution is guaranteed to have a unique result

  2.Requirements :
  1-find the k most frequent numbers in the array. Here, k represents the number of elements that should be returned, which are the ones that appear the most frequently. The order of the result does not matter.
  Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


Corner case:
1-empty array

Complexities :
time ===> O(n^2 logN)
space ===>O(n)
  */

function topKFrequent(nums: number[], k: number): number[] {
  const frequenciesMap = new Map<number, number>();
  for (const num of nums) {
    frequenciesMap.set(num, (frequenciesMap.get(num) ?? 0) + 1);
  }
  return [...frequenciesMap.entries()]
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((entry) => entry[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
