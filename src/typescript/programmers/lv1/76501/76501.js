function solution(absolutes, signs) {
  return absolutes.reduce((result, absolute, idx) => {
    const sign = signs[idx];
    return sign ? (result += absolute) : (result -= absolute);
  }, 0);
}
