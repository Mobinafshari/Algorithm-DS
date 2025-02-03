function findIndex(target) {
  let arr = [-1, 0, 3, 5, 9, 12, 15];
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; 
    } else if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}

console.log(findIndex(9)); 
console.log(findIndex(3));
console.log(findIndex(100)); 
