const solution = (N, stages) => {
  const sortedStages = stages.sort((a, b) => a - b);
  const stagesLength = sortedStages.length;
  const failRateMap = new Map();
  sortedStages.forEach((stage) => {
    if (stage === N + 1) return;
    failRateMap.set(stage, failRateMap.get(stage) + 1 || 1);
  });
  failRateMap.forEach((value, key) => {
    const startIndex = sortedStages.indexOf(key);
    if (startIndex === -1) return;
    failRateMap.set(key, value / (stagesLength - startIndex));
  });
  const arr = Array.from({ length: N }, (v, k) => [k+ 1, failRateMap.get(k + 1) || 0]);
  const answer = arr.sort((a, b) => {
    const [aStage, aRate] = a;
    const [bStage, bRate] = b;
    if (aRate === bRate) {
      // 실패율이 같으면 오름차순
      return aStage - bStage;
    }
    // 실패율은 내림차순
    return bRate - aRate;
  }).map(([stage, _]) => stage);
  return answer;
};
