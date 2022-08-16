function solution(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const answer = numbers.reduce((result, num, index) => result.split(num).join(index), s);
  return Number(answer);
}