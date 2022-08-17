const solution = (arr) => {
  const answer = arr.reduce((result, curr) => result + curr, 0);
  return answer / arr.length;
};
