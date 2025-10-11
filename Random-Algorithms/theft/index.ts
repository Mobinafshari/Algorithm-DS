// An experienced robber aims to steal the money in the houses on a street.
//  Each house has a certain amount of money hidden, but there is a catch:
//  the security systems in adjacent houses are interconnected. If the robber breaks into two neighboring houses, the police will be alerted.

// Given an array of integers numbers where each element represents the amount of money in a house, determine the maximum amount of money the robber can steal without triggering the alarm.
export default function neighborhoodTheft(numbers: number[]): number {
  let prev = new Map<number, number>();
  let index = 0;
  let deleted;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const now = prev.get(index) ?? 0;
    if (number > now) {
      if (i - index == 1) {
        deleted = {
          index,
          number: prev.get(index)!,
        };
        console.log("----", deleted, index, i, number);
        prev.delete(index);
        // if (deleted.index && deleted.index - i !== 1) {
        //   prev.set(deleted.index, deleted.number);
        //   deleted = {};
        // }
        index = i;
        prev.set(i, number);
      } else {
        index = i;
        prev.set(i, number);
      }
    } else {
      if (i - index == 1) {
        continue;
      } else {
        index = i;
        prev.set(i, number);
      }
    }
  }
  console.log(prev);
  return [...prev.values()].reduce((acc, current) => acc + current, 0);
}

console.log(neighborhoodTheft([2, 7, 9, 3, 1]));
