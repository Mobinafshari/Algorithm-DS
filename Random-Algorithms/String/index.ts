// function countSubstrings(s: string): number {
//   let count = 0;

//   const expand = (left: number, right: number) => {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       count++;
//       left--;
//       right++;
//     }
//   };

//   for (let i = 0; i < s.length; i++) {
//     expand(i, i);
//     expand(i, i + 1);
//   }

//   return count;
// }
function countSubstrings(s: string): number {
  let count = 0;
  function checker(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    checker(i, i);
    checker(i, i + 1);
  }
  return count;
}

// function isValid(s: string): boolean {
//   const stack: string[] = [];
//   const map: Record<string, string> = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (const char of s) {
//     if (["(", "[", "{"].includes(char)) {
//       stack.push(char);
//     } else {
//       const top = stack.pop();
//       if (top !== map[char]) return false;
//     }
//   }

//   return stack.length === 0;
// }

function isValid(s: string): boolean {
  const charsStack: string[] = [];
  const mapper = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const token of s) {
    if (["}", "]", ")"].includes(token)) {
      const last = charsStack.pop();
      if (last !== mapper[token]) return false;
    } else {
      charsStack.push(token);
    }
  }
  return charsStack.length === 0;
}

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0; 
  const letterMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letterMap.has(letter) && letterMap.get(letter)! >= start) {
      start = letterMap.get(letter)! + 1;
    }

    letterMap.set(letter, i);

    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("tmmzuxt"));
