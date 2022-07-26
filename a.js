function solution(array = [], commands) {
  const answer = commands.map((command) => {
    const [i, j, k] = command;
    return array.slice(i - 1, j).sort((a,b) => a- b)[k-1]
  })
  return answer;
}
