const solution = (s) => {
  const isOdd = s.length % 2 === 1;
  const startIdx = isOdd ? Math.floor(s.length / 2) : Math.floor(s.length / 2) - 1
  const endIdx = isOdd ? startIdx + 1 : startIdx + 2;
  return s.slice(startIdx, endIdx)
};
