function solution(numbers) {
  return numbers.reduce((result, curr) => result -= curr, 45)
}
