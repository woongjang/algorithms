const solution = (n, lost, reserve) => {
  const tempLost = lost
    .sort((a, b) => a - b)
    .filter((lostStudent) => !reserve.includes(lostStudent));
  const tempReserve = reserve
    .sort((a, b) => a - b)
    .filter((reserveStudent) => !lost.includes(reserveStudent));

  const reserveSet = new Set(tempReserve);

  const finalLost = tempLost.reduce((result, studentNum) => {
    const hasBefore = reserveSet.has(studentNum - 1);
    const hasAfter = reserveSet.has(studentNum + 1);
    if (!hasBefore && !hasAfter) return result.concat(studentNum);
    if (hasBefore) {
      reserveSet.delete(studentNum - 1);
      return result;
    }
    if (hasAfter) {
      reserveSet.delete(studentNum + 1);
      return result;
    }
  }, []);

  const answer = n - finalLost.length;
  return answer;
};
