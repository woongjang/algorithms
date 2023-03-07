const solution = (arr) => {
  const answer = [];
  let prev;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (prev !== curr) {
      prev = curr;
      answer.push(curr);
    }
  }
  return answer
}