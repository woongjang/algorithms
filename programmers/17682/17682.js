const solution = (dartResult) => {
  const scores = [];
  for (let i = 0; i < dartResult.length; i++) {
    let score = 0;
    // 정수가 나오면 현재 기회에서의 값을 계산하는 방식으로 진행
    const curr = dartResult[i] * 1;
    if (Number.isInteger(curr)) {
      score = curr;
      if (dartResult[i + 1] === '0') {
        i++;
        score = 10;
      }
    }
    const bonus = dartResult[i + 1];
    if (bonus === 'S') score **= 1;
    else if (bonus === 'D') score **= 2;
    else score **= 3;
    i++;

    const option = dartResult[i + 1];
    if (option === '#' || option === '*') {
      i++;
      if (option === '#') {
        score *= -1;
      } else {
        score *= 2;
        if (scores[scores.length - 1]) {
          scores[scores.length - 1] *= 2;
        }
      }
      scores.push(score);
    } else {
      scores.push(score);
    }
  }
  return scores.reduce((result, curr) => result + curr, 0);
};
