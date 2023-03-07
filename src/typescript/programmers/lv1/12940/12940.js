const solution = (n, m) => {
  const minNum = Math.min(n, m);
  const maxNum = Math.max(n, m);
  let divisor;
  let multiple;
  for (let i = minNum; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      divisor = i;
      break;
    }
  }
  for (let i = maxNum; i > 0; i++) {
    if (i % n === 0 && i % m === 0) {
      multiple = i;
      break;
    }
  }
  return [divisor, multiple];
 };
