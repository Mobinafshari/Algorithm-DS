

function longestCommonSubsequence(text1: string, text2: string): number {
  const textOneSequences = generateSubsequences(text1);
  const textTwoSequences = generateSubsequences(text2);

  let result = 0;
  if (textOneSequences.length > textTwoSequences.length) {
    for (let sequence of textTwoSequences) {
      if (textOneSequences.includes(sequence)) {
        result = sequence.length > result ? sequence.length : result;
      }
    }
  } else {
    for (let sequence of textOneSequences) {
      if (textTwoSequences.includes(sequence)) {
        result = sequence.length > result ? sequence.length : result;
      }
    }
  }

  function generateSubsequences(input: string) {
    const subsequences: string[] = [];
    const length = input.length;

    for (let i = 0; i < 1 << length; i++) {
      let currentSubsequence = "";

      for (let j = 0; j < length; j++) {
        if (i & (1 << j)) {
          currentSubsequence += input[j];
        }
      }

      subsequences.push(currentSubsequence);
    }

    return subsequences;
  }
  return result;
}

console.log(longestCommonSubsequence("bl", "yby"));

/*
Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Complexities :
time ===>
space ===>
*/
