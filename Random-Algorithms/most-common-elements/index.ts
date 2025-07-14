function mostCommonElements(numbers: number[], k: number): number[] {
  const countedNumbers: Record<number, number> = {};

  for (const num of numbers) {
    countedNumbers[num] = (countedNumbers[num] || 0) + 1;
  }

  return Object.entries(countedNumbers)
    .sort(([, a], [, b]) => b - a)
    .slice(0, k)
    .map(([key]) => +key);
}

console.log(mostCommonElements([5, 5, 6, 6, 6, 7, 8, 8, 8, 8], 2));
