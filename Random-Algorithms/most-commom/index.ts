export default function mostCommonElements(
  numbers: number[],
  k: number
): number[] {
  const freqMap = new Map<number, number>();
  for (const number of numbers) {
    freqMap.set(number, (freqMap.get(number) ?? 0) + 1);
  }
  const res = [...freqMap.entries()]
    .sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }
      return a[0] - b[0];
    })
    .map((element) => element[0]);
  return res.slice(0, k);
}

console.log(mostCommonElements([7, 7, 7, 8, 8, 9, 9, 9, 9, 5, 5, 5], 3));
