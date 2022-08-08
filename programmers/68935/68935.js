const solution = (n) => {
  const getTernary = (num, arr = []) => {
    let result = arr;
    const quotient = Math.floor(num / 3);
    const remainder = num % 3;
    result.unshift(remainder);
    if (quotient !== 0) {
      result = getTernary(quotient, result);
    }
    return result;
  };
  const getDecimalFromTenaryArr = (tenaryArr) =>
    tenaryArr.reduce((result, ternary, index) => {
      return result + 3 ** (tenaryArr.length - index - 1) * ternary;
    }, 0);

  const ternary = getTernary(n);
  const reverseTernaryArr = ternary.reverse();
  const answer = getDecimalFromTenaryArr(reverseTernaryArr);
  return answer
};
