function solution(n, lost, reserve) {
  const realLost = lost
    .sort((a, b) => a - b)
    .filter((lostStudent) => !reserve.includes(lostStudent));
  let realReserve = reserve
    .sort((a, b) => a - b)
    .filter((reserveStudent) => !lost.includes(reserveStudent));
  return (
    n -
    realLost.filter((lostStudent) => {
      const borrowFrom = realReserve.find((r) => Math.abs(r - lostStudent) === 1);
      if (!borrowFrom) return true;
      realReserve = realReserve.filter((r) => r !== borrowFrom);
    }).length
  );
}
