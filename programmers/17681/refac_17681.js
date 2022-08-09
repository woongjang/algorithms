const solution = (n, arr1, arr2) => {
  return arr1.map((value1, idx) => {
    const value2 = arr2[idx];
    const mergedRow = (value1 | value2).toString(2).padStart(n, 0);
    console.log(mergedRow);
    return mergedRow.replace(/1|0/g, (v) => !!Number(v) ? '#' : ' ');
  });
};
