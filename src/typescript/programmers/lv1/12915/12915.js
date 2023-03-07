const solution = (strings, n) => {
  const answer = strings.sort((a, b) => {
    const aCode = a.charCodeAt(n);
    const bCode = b.charCodeAt(n);
    if (aCode === bCode) {
      return a > b ? 1 : -1;
    }
    return aCode - bCode;
  });
  return answer;
};
