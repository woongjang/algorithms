const solution = (arr1, arr2) => {
  const answer = arr1.map((row, rowIdx) => {
    const arr2Row = arr2[rowIdx];
    const sumRow = row.map((col, colIdx) => col + arr2Row[colIdx]);
    return sumRow;
  });
  return answer;
};
