const solution = (n) => {
  const stringNums = n.toString();
  const answer = [...stringNums].reduce((result, curr) => (result += Number(curr)), 0);
  return answer;
};
