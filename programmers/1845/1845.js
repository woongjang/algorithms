function solution(nums) {
  const choiceNumLength = Math.floor(nums.length / 2);
  const uniqueNumLength = nums.filter((num, idx) => nums.indexOf(num) === idx).length;
  if (uniqueNumLength <= choiceNumLength) {
    return uniqueNumLength;
  }
  return choiceNumLength;
}
