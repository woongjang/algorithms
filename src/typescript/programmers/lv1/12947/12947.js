const solution = (x) => {
  const sum = [...x.toString()].reduce((result, curr) => result + Number(curr), 0);
  const answer = x % sum === 0;
  return answer;
};
