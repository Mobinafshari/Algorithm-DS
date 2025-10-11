// An experienced robber aims to steal the money in the houses on a street.
//  Each house has a certain amount of money hidden, but there is a catch:
//  the security systems in adjacent houses are interconnected. If the robber breaks into two neighboring houses, the police will be alerted.

// Given an array of integers numbers where each element represents the amount of money in a house, determine the maximum amount of money the robber can steal without triggering the alarm.
function neighborhoodTheft(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];

  let prev2 = numbers[0]; 
  let prev1 = Math.max(numbers[0], numbers[1]);

  for (let i = 2; i < numbers.length; i++) {
    const current = Math.max(prev1, prev2 + numbers[i]);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

console.log(neighborhoodTheft([2, 7, 9, 3, 1]));
