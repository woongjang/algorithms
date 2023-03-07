const solution = (n) => {
  let answer = 0;
  const sqrtNum = Math.sqrt(n);
  if (Number.isInteger(sqrtNum)) answer += sqrtNum;

  for (let i = 0; i < sqrtNum; i++) {
    if (n % i === 0) {
      answer += (n / i + i);
    }
  }
  return answer;
};
