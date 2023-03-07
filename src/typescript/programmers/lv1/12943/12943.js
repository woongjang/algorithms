const solution = (num) => {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return collatz(num)
};

const collatz = (num, count = 0) => {
  if (count > 500) return -1;
  if (num === 1) return count;
  const remain = num % 2;
  if (remain === 1) {
    return collatz(num * 3 + 1, count + 1);
  }
  return collatz(num / 2, count + 1);
};
