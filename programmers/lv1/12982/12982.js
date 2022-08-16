const solution = (d, budget) => {
  const { maxD } = d
    .sort((a, b) => a - b)
    .reduce(
      (result, depart, idx) => {
        const { budget, maxD } = result;
        // maxD 정해진경우
        if (!!maxD) return result;
        // budget이 초과한 경우
        if (budget - depart < 0) return { budget, maxD: idx };
        // budget이 초과하지 않고 모두 충족될때
        if (idx === d.length - 1) return { budget, maxD: d.length };
        // budget 삭제하면서 진행
        return { budget: budget - depart, maxD: 0 };
      },
      {
        budget,
        maxD: 0,
      }
    );
  return maxD;
};
