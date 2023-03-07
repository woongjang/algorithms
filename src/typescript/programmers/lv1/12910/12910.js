const solution = (arr, divisor) => {
  const answer = [];
  const sortedArr = arr.sort((a, b) => a - b);
  sortedArr.forEach((el) => {
    if (Number.isInteger(el / divisor)) {
      answer.push(el);
    }
  });
  return answer.length === 0 ? [-1] : answer;
};
