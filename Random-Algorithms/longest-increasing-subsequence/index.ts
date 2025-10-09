export default function longestIncreasingSubsequence(nums: number[]): number {
  if (nums.length === 0) return 0;

  const tails: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }

    tails[left] = num;
  }

  return tails.length;
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
