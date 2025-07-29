// function twoSum(nums: number[], target: number): number[] {
//   const map = new Map<number, number>();
//   for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     const remain = target - number;
//     if (map.has(remain)) {
//       return [i, map.get(remain)!];
//     }
//     map.set(nums[i], i);
//   }
//   return [-1, -1];
// }
function twoSum(nums: number[], target: number): number[] {
  const remainMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (remainMap.has(remain)) {
      return [remainMap.get(remain)!, i];
    }
    remainMap.set(nums[i], i);
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

class RandomizedSet {
  private map: Map<number, number>;
  private list: number[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val)!;
    const last = this.list[this.list.length - 1];

    this.list[idx] = last;
    this.map.set(last, idx);

    this.list.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randIndex];
  }
}

function firstMissingPositive(nums: number[]): number {
  const positives = Array.from({ length: nums.length + 1 }).map(
    (_, i) => i + 1
  );
  const set = new Set<number>(positives);
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    }
  }
  return [...set][0];
}

class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    this.cache.set(key, value);
  }
}
