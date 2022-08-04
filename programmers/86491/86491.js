function solution(sizes) {
  let answer = 0;
  const [maxW, maxH] = sizes.reduce((result, size, index) => {
      const [w, h] = result;
      const [a, b] = size;
      const maxW = Math.max(w, Math.max(a, b));
      const maxH = Math.max(h, Math.min(a,b));
      return [maxW, maxH];
  }, [0, 0]);
  answer = maxW * maxH
  return answer;
}