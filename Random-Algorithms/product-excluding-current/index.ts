function arrayProductExcludingCurrent(numbers: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(number * numbers[j]);
    }
  }
  return result;
}

console.log(arrayProductExcludingCurrent([1, 2, 3]));
