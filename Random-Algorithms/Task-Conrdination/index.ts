function taskCoordinator(tasks: string[], k: number): number {
  const countMap = new Map<string, number>();
  for (const task of tasks) {
    countMap.set(task, (countMap.get(task) ?? 0) + 1);
  }

  const counts = [...countMap.values()];
  const maxCount = Math.max(...counts);
  
  const maxCountTasks = counts.filter((c) => c === maxCount).length;
  console.log(maxCountTasks);

  const partCount = maxCount - 1;
  const partLength = k + 1;
  const emptySlots = partCount * partLength + maxCountTasks;

  return Math.max(tasks.length, emptySlots);
}

console.log(
  taskCoordinator(
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
    2
  )
);
