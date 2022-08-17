const solution = (n, m) => {
  const minNum = Math.min(n, m);
  let divisor;
  for (let i = minNum; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      divisor = i;
      break;
    }
  }
  const multiple = divisor * (n / divisor) * (m / divisor);
  const answer = [divisor, multiple];
  return answer;
};
