const solution = (s) => {
  const answer = [...s].reduce((result, char) => {
    const lowerChar = char.toLowerCase();
    if (lowerChar === 'p') return result + 1;
    if (lowerChar === 'y') return result - 1;
    return result;
  }, 1);
  return answer === 1;
};
