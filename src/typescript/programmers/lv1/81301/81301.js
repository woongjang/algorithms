function solution(s) {
  const chars = [...s];
  const numberMap = new Map([
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['four', 4],
    ['five', 5],
    ['six', 6],
    ['seven', 7],
    ['eight', 8],
    ['nine', 9],
  ]);
  const { numberString } = chars.reduce((result, num) => {
    const {tempChars, numberString} = result;
    // 숫자인 경우
    if (!isNaN(num)) {
      return {
        ...result,
        numberString: numberString + num
      }
    }
    // 문자인 경우
    // 숫자를 찾은경우
    const findNumber = numberMap.get(tempChars + num)
    if (findNumber !== undefined) {
      return {
        tempChars: '',
        numberString: numberString + findNumber
      }
    }
    // 아직 일치하지않는 문자열인경우
    return {
      tempChars: tempChars + num,
      numberString,
    }
  }, {
    tempChars: '',
    numberString: '',
  });

  return Number(numberString);
}