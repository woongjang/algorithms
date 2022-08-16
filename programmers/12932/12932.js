const solution = (n) => {
  const answer = [...n.toString()].map((_, idx, arr) => 
    Number(arr[arr.length - idx - 1])
  );
  return answer;
};
