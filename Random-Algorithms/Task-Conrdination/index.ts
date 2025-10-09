function taskCoordinator(tasks: string[], k: number) {
  const countMap = new Map<string, number>();
  for (const task of tasks) {
    countMap.set(task, (countMap.get(task) ?? 0) + 1);
  }
  const res: string[] = [];

  const sortFrequently = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sortFrequently.length; i++) {
    let [task, count] = sortFrequently[i];
    let index = i;
    while (count > 0) {
      if (!!res[index]) {
        index++;
        continue;
      }
      res[index] = task;
      index += k + 1;
      count--;
    }
  }
  console.log(res);
  return res.length;
}
console.log(
  taskCoordinator(
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
    2
  )
);
