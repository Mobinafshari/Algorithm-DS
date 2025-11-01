function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  const expand = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLen = right - left + 1;
      if (currLen > maxLen) {
        start = left;
        maxLen = currLen;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i - 1, i + 1); 
    expand(i, i + 1); 
  }

  return s.slice(start, start + maxLen);
}

console.log(longestPalindrome("babad")); 
console.log(longestPalindrome("cbbd")); 
console.log(longestPalindrome("ac")); 
