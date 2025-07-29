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
  let res = 0;
  const letterSet = new Set<string>();
  for (const letter of s) {
    if (letterSet.has(letter)) return res;
    res++;
    letterSet.add(letter);
  }
  return res;
}

console.log(lengthOfLongestSubstring("pwwkew"));
