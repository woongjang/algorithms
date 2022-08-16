const solution = (n) => {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      answer++;
      continue;
    }
    const sqrtNum = Math.sqrt(i);
    if (Number.isInteger(sqrtNum)) continue;
    let isPrime = true;
    for (let j = 2; j < sqrtNum; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      };
    }
    if (isPrime) answer++;
  }
  return answer;
};
