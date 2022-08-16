function solution(nums) {
  const choiceNumLength = Math.floor(nums.length / 2);
  const uniqueNumLength = [...new Set(nums)].length
  return uniqueNumLength <= choiceNumLength ? uniqueNumLength : choiceNumLength
}
