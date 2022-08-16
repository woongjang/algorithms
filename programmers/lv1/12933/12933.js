const solution = (n) => {
  const arr = [...n.toString()];
  arr.sort((a,b) => Number(b) - Number(a));
  const answer = Number(arr.join(''));
  return answer
}