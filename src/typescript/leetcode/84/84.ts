type StackElement = [number, number];
function largestRectangleArea(heights: number[]): number {
  const stack: StackElement[] = [];
  let res = 0;
  heights.concat(0).forEach((height, idx) => {
    let startIndex = idx;
    while (stack.length && stack[stack.length - 1][1] > height) {
      let [pos, height] = stack.pop() as StackElement;
      res = Math.max(res, (idx - pos) * height);
      startIndex = pos;
    }
    stack.push([startIndex, height]);
  })
  return res;
};

console.log(largestRectangleArea([1,2,3,4]))