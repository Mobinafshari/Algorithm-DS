export default function minimumCoinsForChange(coins: number[], target: number) {
  if (target == 0) return 0;
  let min = Infinity;
  let suffix = new Map<number, number>();
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    sum += coins[i];
    suffix.set(sum, i + 1);
    if (i > 0) {
      suffix.set(coins[i] + coins[i - 1], 2);
    }
    if (i < coins.length - 1) {
      suffix.set(coins[i] + coins[i + 1], 2);
    }
  }
  if (suffix.has(target)) {
    min = Math.min(min, suffix.get(target) ?? Infinity);
  }
  for (let i = 0; i < coins.length; i++) {
    const number = coins[i];
    const remain = target % number;

    if (remain == 0) {
      min = Math.min(min, target / number);
    } else if (coins.includes(remain)) {
      min = Math.min(min, (target - remain) / number + 1);
    } else if (suffix.has(remain)) {
      min = Math.min(min, (target - remain) / number + suffix.get(remain)!);
    }
  }
  console.log(...suffix.keys());
  return min == Infinity ? -1 : min;
}

console.log(minimumCoinsForChange([186, 419, 83, 408], 6249));
