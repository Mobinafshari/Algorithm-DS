function isBalancedBrackets(str: string): boolean {
  const bracketMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (const char of str) {
    if (Object.values(bracketMap).includes(char)) {
      stack.push(char);
    } else if (char in bracketMap) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  console.log(stack);

  return stack.length === 0;
}

console.log(isBalancedBrackets("([]"));
