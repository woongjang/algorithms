const solution = (participants, completions) => {
  const countMap = new Map();
  participants.forEach((participant) => {
    const participantCount = countMap.get(participant) || 0;
    countMap.set(participant, participantCount + 1);
  });

  completions.forEach((completion) => {
    const completionCount = countMap.get(completion);
    if (completionCount) {
      countMap.set(completion, completionCount - 1);
    }
  });
  let answer;
  for (let [key, value] of countMap) {
    if (value > 0) {
      answer = key;
      break;
    }
  }
  return answer;
};

// 배열순회를 활용한 방법
const solution2 = (participants, completions) =>
  participants.find(
    (name) => !completions[name]--,
    completions.map((name) => (completions[name] = completions[name] | 0) + 1)
  );
