// https://leetcode.com/problems/sort-the-people/
function sortPeople(names: string[], heights: number[]): string[] {
  const mergeArr: (number | string)[][] = [];
  names.forEach((name, idx) => {
    mergeArr.push([name, heights[idx]]);
  });
  return mergeArr
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .map((mergedElement) => mergedElement[0].toString());
}
