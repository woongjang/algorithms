// https://leetcode.com/problems/max-area-of-island/
function maxAreaOfIsland(grid: number[][]) {
  const groups: number[] = [];

  const find = function (ind: number) {
    if (groups[ind] == ind) return ind;
    groups[ind] = find(groups[ind]);
    return groups[ind];
  };

  const union = function (eater: number, eaten: number) {
    const parent1 = find(eater);
    const parent2 = find(eaten);
    groups[parent2] = parent1;
  };

  const cols = grid[0].length;
  const groupLocs = new Map();
  const addGroup = function (r: number, c: number) {
    const pos = groups.length;
    groupLocs.set(r * cols + c, pos);
    groups.push(pos);

    return pos;
  };
  const getGroup = function (r: number, c: number) {
    return groupLocs.get(r * cols + c);
  };

  grid.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 0) return;
      const cellIndex = addGroup(rowIndex, colIndex);
      if (colIndex > 0 && row[colIndex - 1] === 1) {
        const indWest = getGroup(rowIndex, colIndex - 1);
        union(indWest, cellIndex);
      }
      if (rowIndex > 0 && grid[rowIndex - 1][colIndex] === 1) {
        const indNorth = getGroup(rowIndex - 1, colIndex);
        union(indNorth, cellIndex);
      }
    });
  });

  if (groups.length === 0) return 0;
  groups.forEach((group, i) => {
    find(i);
  });
  groups.sort((a, b) => a - b);
  let run = 1;
  let max = 1;
  groups.forEach((group, index) => {
    if (group !== groups[index - 1]) {
      max = Math.max(max, run);
      run = 1;
      return;
    }
    run++;
  });
  max = Math.max(max, run);
  return max;
}
