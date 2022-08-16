const solution = (n) => {
  let answer = Array.from({ length: n }, (_, k) => {
    if (k % 2 === 0) return '수';
    return '박';
  }).join('');
  return answer;
};
