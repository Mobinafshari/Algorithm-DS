function findMissingNumberInSequence(numbers: number[]): number | undefined {
  const options = Array.from({ length: numbers.length + 1 }).map((_, i) => i);
  const nums = new Set(numbers);
  for (const num of options) {
    if (nums.has(num)) continue;
    return num;
  }
}

console.log(findMissingNumberInSequence([3, 0, 4, 2, 1]));
