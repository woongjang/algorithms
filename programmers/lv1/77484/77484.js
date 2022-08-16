function solution(lottos, win_nums) {
  let min = 6;
  let max = 1;
  let isBlank = true;
  lottos.forEach((num) => {
    if (num === 0) return;
    if (win_nums.includes(num)) {
      if (isBlank) {
        isBlank = false;
        return;
      }
      min -= 1;
      return;
    }
    if (max === 6) return;
    max += 1;
  });
  const answer = [max, min];
  return answer;
}
