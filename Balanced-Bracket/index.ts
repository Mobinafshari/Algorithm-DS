function isBalancedBrackets(str: string) {
  const options = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ];
  const splitted = str.split("");
  const matchChars: Set<string[]> = new Set();
  for (let char of splitted) {
    let found = false;

    for (const item of matchChars) {
      if (item.includes(char)) {
        matchChars.delete(item);
        found = true;
        break;
      }
    }

    if (found) continue;

    const foundedChar = options
      .find((option) => option.includes(char))
      ?.filter((selected) => selected !== char);

    matchChars.add(foundedChar!);
  }

  return [...matchChars].length === 0;
}

console.log(isBalancedBrackets("([)"));
