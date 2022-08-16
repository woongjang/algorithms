function solution(a, b) {
  return a.reduce((result, curr, idx) => (result += curr * b[idx]), 0);
}
