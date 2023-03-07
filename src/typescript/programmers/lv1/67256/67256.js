function solution(numbers, hand) {
  const getPosition = (number) => {
    if (number === 0) return [3, 1];
    const row = Math.floor((number - 1) / 3);
    const col = number % 3 === 0 ? 2 : (number % 3) - 1;
    return [row, col];
  };

  const calculateDistance = (position, reference) => {
    const [pRow, pCol] = position;
    const [rRow, rCol] = reference;
    return Math.abs(pRow - rRow) + Math.abs(pCol - rCol);
  };

  let leftPosition = [3, 0];
  let rightPosition = [3, 2];
  const answer = numbers.reduce((result, number) => {
    const referencePosition = getPosition(number);
    const [rRow, rCol] = referencePosition;
    if (rCol === 0) {
      leftPosition = referencePosition;
      return result + 'L';
    }
    if (rCol === 2) {
      rightPosition = referencePosition;
      return result + 'R';
    }
    // 중앙의 경우
    const leftDistance = calculateDistance(leftPosition, referencePosition);
    const rightDistance = calculateDistance(rightPosition, referencePosition);
    if (leftDistance === rightDistance) {
      if (hand === 'right') {
        rightPosition = referencePosition;
        return result + 'R';
      }
      leftPosition = referencePosition;
      return result + 'L';
    }
    if (leftDistance < rightDistance) {
      leftPosition = referencePosition;
      return result + 'L';
    }
    rightPosition = referencePosition;
    return result + 'R';
  }, '');
  return answer;
}
