function mostCommonElements(numbers: number[], k: number): number[] {
  const countedNumbers = {};
  for (const number of numbers) {
    if (Object.keys(countedNumbers).includes(`${number}`)) {
      countedNumbers[number]++;
      continue;
    }
    countedNumbers[number] = 1;
  }
  const result: number[] = [];
  for (const [key, value] of (
    Object.entries(countedNumbers) as [string, number][]
  )
    .sort(([, number1], [, number2]) => number2 - number1)
    .slice(0, k)) {
    result.push(+key);
  }
  return result;
}

console.log(mostCommonElements([5, 5, 6, 6, 6, 7, 8, 8, 8, 8], 2));
