const solution = (price, money, count) => {
  const countArr = Array.from({ length: count }, (_, k) => k + 1);
  const totalRequiredMoney = countArr.reduce((result, count) => {
    return result - count * price;
  }, money);
  if (totalRequiredMoney > 0) return 0;
  const answer = Math.abs(totalRequiredMoney);
  return answer;
};
