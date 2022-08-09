const solution = (n) => {
  const compareNum = n - 1;
  const sqrtNum = Math.sqrt(compareNum);
  let answer = sqrtNum;
  if (Number.isInteger(sqrtNum)) {
    return answer;
  }
  for (let i = 2; i <= Math.floor(sqrtNum); i++) {
    if (compareNum % i === 0) {
      answer = i;
      break;
    }
  }
  // 다 돌고도 answer가 변하지 않으면
  if (answer === sqrtNum) answer = compareNum;
  return answer;
};
