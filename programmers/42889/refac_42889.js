const solution = (N, stages) => {
  const stagesLength = stages.length;
  const sortedStages = stages.sort((a, b) => a - b);
  const failRateArr = Array.from({ length: N }, (_, k) => {
    const stage = k + 1;
    const startIndex = sortedStages.indexOf(stage);
    const lastIndex = sortedStages.lastIndexOf(stage);
    // 분모
    const reachCount = stagesLength - startIndex;
    // 분자
    const failCount = lastIndex === startIndex ? 1 : lastIndex - startIndex + 1;
    if (startIndex === -1) return [stage, 0];
    return [stage, failCount / reachCount];
  });
  const answer = failRateArr.sort((a, b) => {
    const [aStage, aRate] = a;
    const [bStage, bRate] = b;
    if (aRate === bRate) {
      // 실패율이 같으면 오름차순
      return aStage - bStage;
    }
    // 실패율은 내림차순
    return bRate - aRate;
  }).map(([stage, _]) => stage);
  return answer
};
