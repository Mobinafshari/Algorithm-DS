function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const remain = target - number;
    if (map.has(remain)) {
      return [i, map.get(remain)!];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  const wordsMap = new Map<string, number>();
  for (const word of magazine) {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word)! + 1);
      continue;
    }
    wordsMap.set(word, 1);
  }
  for (const word of ransomNote) {
    if (wordsMap.has(word)) {
      if (wordsMap.get(word) === 0) return false;
      wordsMap.set(word, wordsMap.get(word)! - 1);
    }
    return false;
  }
  return true;
}

function groupAnagrams(strs: string[]): string[][] {
  const group = new Map<string, string[]>();
  for (const str of strs) {
    const words = str.split("").sort().join("");
    if (group.has(words)) {
      group.set(words, [...group.get(words)!, str]);
      continue;
    }
    group.set(words, [str]);
  }
  return Array.from(group.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
