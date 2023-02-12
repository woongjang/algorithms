function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1])
  let remainSpaces = truckSize;
  let output = 0;

  for (const [boxCount, unitCount] of boxTypes) {
      const fillBoxCount = Math.min(boxCount, remainSpaces)
      output += fillBoxCount * unitCount;
      remainSpaces -= fillBoxCount;
      if (remainSpaces === 0) break;
  }

  return output
};