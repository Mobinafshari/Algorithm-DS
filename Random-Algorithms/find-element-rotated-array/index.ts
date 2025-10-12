function findInRotatedArray(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) return middle;

    if (numbers[left] <= numbers[middle]) {
      if (target >= numbers[left] && target < numbers[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > numbers[middle] && target <= numbers[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

console.log(findInRotatedArray([2, 3, 4, 0, 1], 0)); // ✅ Output: 3
