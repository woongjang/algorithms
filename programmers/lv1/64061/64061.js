function solution(board, moves) {
  const stacked = [];
  let count = 0;
  for (const move of moves) {
    const column = move - 1;
    for (const row of board) {
      if (row[column]) {
        const picked = row[column];
        row[column] = 0;
        if (stacked[stacked.length - 1] === picked) {
          count = count + 2;
          stacked.pop();
        } else {
          stacked.push(picked);
        }
        break;
      }
    }
  }
  return count;
}