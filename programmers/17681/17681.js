const solution = (n, arr1, arr2) => {
  const makeBinaryArrFromNum = (num) => {
    const binaryArr = num.toString(2);
    const lengthGap = n - binaryArr.length;
    let result = [...binaryArr].map((e) => Number(e));
    if (lengthGap > 0) {
      result = Array.from({ length: n }, (_, k) => {
        if (k < lengthGap) return 0;
        return Number(binaryArr[k - lengthGap]);
      });
    }
    return result;
  };

  let answer = [];
  for (let i = 0; i < n; i++) {
    const arr1Row = makeBinaryArrFromNum(arr1[i]);
    const arr2Row = makeBinaryArrFromNum(arr2[i]);
    const mergeRow = arr1Row.map((colValue1, idx) => {
      return !!colValue1 || !!arr2Row[idx] ? '#' : ' ';
    });
    answer.push(mergeRow.join(''));
  }
  return answer;
};
