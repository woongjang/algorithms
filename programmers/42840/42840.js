function highestStudnets(counts) {
  const maxCount = Math.max(...counts);
  return counts.reduce((result, count, idx) => {
    if (count === maxCount) {
      return [...result, idx + 1];
    }
    return result;
  }, [])
}

function solution(answers = []) {
  // 5, 8, 10
  const firstStudent = [1, 2, 3, 4, 5];
  const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const counts = answers.reduce(
    (counts, answer, index) => {
      const firstAnswer = firstStudent[index % 5];
      const secondAnswer = secondStudent[index % 8];
      const thirdAnswer = thirdStudent[index % 10];
      const [firstCnt, secondCnt, thirdCnt] = counts;
      return [
        firstAnswer === answer ? (firstCnt + 1) : firstCnt,
        secondAnswer === answer ? (secondCnt + 1) : secondCnt,
        thirdAnswer === answer ? (thirdCnt + 1) : thirdCnt,
      ];
    },
    [0, 0, 0]
  );

  return highestStudnets(counts);
}
