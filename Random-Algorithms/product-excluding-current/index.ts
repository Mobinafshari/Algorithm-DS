function arrayProductExcludingCurrent(numbers: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    ExcludeCurrent(i);
  }
  function ExcludeCurrent(index) {
    const innerNumbers = structuredClone(numbers);
    innerNumbers.splice(index, 1);
    let multiplyRes = 1;
    for (const number of innerNumbers) {
      multiplyRes = multiplyRes * number;
    }
    result.push(Math.abs(multiplyRes));
  }
  return result;
}

console.log(arrayProductExcludingCurrent([2, 0, 3]));
