function solution(nums) {
  const isPrimeNumber = (number) => {
    if (number === 2) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };
  const numsLength = nums.length;
  let answer = 0;
  for (let i = 0; i < numsLength - 2; i++) {
    const firstNumber = nums[i];
    for (let j = i + 1; j < numsLength - 1; j++) {
      const middleNumber = nums[j];
      for (let k = j + 1; k < numsLength; k++) {
        const lastNumber = nums[k];
        const number = firstNumber + middleNumber + lastNumber;
        if (isPrimeNumber(number)) {
          answer++;
        }
      }
    }
  }
  return answer;
}
