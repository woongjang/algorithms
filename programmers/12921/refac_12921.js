// 문제의 전제조건인 2부터 시작이라는 기준을 분기문으로 처리하지 않아도 되는것 같아서 그부분만 수정했다.
const solution = (n) => {
  // let answer = 0;
  let answer = 1
  // for (let i = 2; i <= n; i++) {
  for (let i = 3; i <= n; i++) {
    // if (i === 2) {
    //   answer++;
    //   continue;
    // }
    const sqrtNum = Math.sqrt(i);
    if (Number.isInteger(sqrtNum)) continue;
    let isPrime = true;
    for (let j = 2; j < sqrtNum; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      };
    }
    if (isPrime) answer++;
  }
  return answer;
};
