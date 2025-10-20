// An experienced robber aims to steal the money in the houses on a street.
//  Each house has a certain amount of money hidden, but there is a catch:
//  the security systems in adjacent houses are interconnected. If the robber breaks into two neighboring houses, the police will be alerted.

// Given an array of integers numbers where each element represents the amount of money in a house, determine the maximum amount of money the robber can steal without triggering the alarm.
function neighborhoodTheft(numbers: number[]): number | void {
  if (numbers.length < 1) return numbers[0] ?? 0;
  let dp: number[] = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    dp[i] = Math.max(dp[i - 1], numbers[i] + (dp[i - 2] ?? 0));
  }
  return dp[numbers.length - 1];
}

console.log(neighborhoodTheft([2, 7, 9, 3, 1]));
