export default function minimumCoinsForChange(coins: number[], target: number) {
  if (target == 0) return 0;
  let min = Infinity;
  for (const number of coins) {
    if (target % number == 0) {
      min = Math.min(min, target / number);
      continue;
    } else if (coins.includes(number % target)) {
      console.log("hello");
      min = Math.min(min, (target - (target % number)) / number + 1);
    }
  }
  return min == Infinity ? -1 : min;
}

console.log(minimumCoinsForChange([2], 3));
