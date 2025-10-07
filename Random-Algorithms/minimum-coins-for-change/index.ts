export default function minimumCoinsForChange(coins: number[], target: number) {
  if (target == 0) return 0;
  let min = Infinity;
  let suffix = new Map<number, number>();
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    const number = coins[i];
    const remain = target % number;
    sum += number;
    suffix.set(sum, i + 1);
    if (remain == 0) {
      min = Math.min(min, target / number);
    } else if (coins.includes(remain)) {
      min = Math.min(min, (target - remain) / number + 1);
    } else if (suffix.has(remain)) {
      min = Math.min(min, (target - remain) / number + suffix.get(remain)!);
    }
  }
  console.log([...suffix.keys()]);
  return min == Infinity ? -1 : min;
}

console.log(minimumCoinsForChange([1, 2, 5, 10], 27));
