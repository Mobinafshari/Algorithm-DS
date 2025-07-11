// function findDuplicate(arr: number[]) {
//   const uniqueOnes = new Set(arr);
//   return ![...uniqueOnes].length === arr.length;
// }

function findDuplicate(arr: number[]) {
  const seen = new Set<number>();
  for (const num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

console.log(findDuplicate([3, 2, 6, 5, 0, 3, 10, 3, 10, 5]));
