function findDuplicate(arr: number[]) {
  const uniqueOnes = new Set(arr);
  return [...uniqueOnes].length === arr.length;
}

console.log(findDuplicate([1, 2, 4]));
