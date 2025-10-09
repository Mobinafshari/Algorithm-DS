export default function minimumCoinsForChange(
  coins: number[],
  target: number
): number {
  if (target === 0) return 0;

  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let amount = 1; amount <= target; amount++) {
    for (const coin of coins) {
      if (amount - coin >= 0) {
        dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
      }
    }
  }
  return dp[target] === Infinity ? -1 : dp[target];
}

console.log(minimumCoinsForChange([1, 2, 5, 10], 27));
