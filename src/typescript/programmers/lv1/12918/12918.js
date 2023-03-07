const solution = (s) => {
  let answer = false;
  if (s.length === 6 || s.length === 4) {
    answer = [...s].every((char) => !isNaN(char));
  }
  return answer;
};
