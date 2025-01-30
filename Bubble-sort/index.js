const arr = [1, 2, 3, 4, 5 , 0];
let j = 0;
let alreadySorted;

while (j < arr.length && !alreadySorted) {
  for (let i = 0; i < arr.length - 1 - j; i++) {
    let current = arr[i];
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = current;
      alreadySorted = false;
    } else {
      if (alreadySorted === true || alreadySorted === undefined) {
        alreadySorted = true;
      }
    }
  }
  j++;
}

console.log(arr);
