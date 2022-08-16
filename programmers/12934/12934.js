const solution = (n) => {
  const sqrtNum = Math.sqrt(n);
  let answer = -1;
  if (Number.isInteger(sqrtNum)) {
    answer = (sqrtNum + 1) ** 2;
  }
  return answer;
};
