function arrayProductExcludingCurrent(numbers: number[]): number[] {
  const n = numbers.length;
  const result: number[] = Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= numbers[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= numbers[i];
  }

  return result;
}

console.log(arrayProductExcludingCurrent([1, 2, 3])); // [6, 3, 2]
