function maxProduct(numbers: number[]): number {
  const maxArray: number[] = [];
  let maxNumber = 1;
  let lastChosenIndex = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (maxArray.length === 0) {
      maxArray.push(numbers[i]);
      maxNumber = maxNumber * numbers[i];
      lastChosenIndex = i;
    } else if (maxNumber * numbers[i] > maxNumber) {
      maxArray.push(numbers[i]);
    }
  }
}

maxProduct([1, 2, -3, 5, 1]);
