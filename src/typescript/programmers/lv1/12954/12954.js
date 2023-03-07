const solution = (x, n) => {
  const answer = Array.from({ length: n }, (_, k) => (k + 1) * x);
  return answer;
};
