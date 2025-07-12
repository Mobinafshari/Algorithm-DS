function findMissingNumberInSequence(numbers: number[]): number | undefined {
  const options = Array.from({ length: numbers.length + 1 }).map((_, i) => i);
  const nums = new Set(numbers);
  for (const num of options) {
    if (nums.has(num)) continue;
    return num;
  }
}

function secondFindMissingNumberInSequence(numbers: number[]): number {
  const n = numbers.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
  

console.log(secondFindMissingNumberInSequence([3, 0, 4, 2, 1]));
