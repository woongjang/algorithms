const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    const compareNum = Math.floor(Math.sqrt(i));
    for (let j = 1; j <= compareNum; j++) {
      if (j === compareNum && j**2 === i) {
        count++;
        break;
      }
      if (i % j === 0) {
        count += 2;
      }
    }
    count % 2 === 1 ? answer -= i : answer += i;
  }
  return answer;
};
