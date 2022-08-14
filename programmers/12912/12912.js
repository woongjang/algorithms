const solution = (a, b) => {
  if (a === b) return a;
  let min = a;
  let max = b;
  if (a > b) {
    max = a;
    min = b;
  }
  let answer = 0;
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
};
