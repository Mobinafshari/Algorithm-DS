const arr = [4, 2, 3, 1 , 9 , 2 , 2 , 0 , -1];
let current;
for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    let j = i - 1;
    while (arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}

console.log(arr);
