function solution(new_id) {    
  const answer = new_id
      .toLowerCase()
      .replace(/[^\w-_.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .replace(/^$/, 'a')
      .slice(0, 15).replace(/\.$/, '');
  const newIdLength = answer.length;
  return newIdLength > 2 ? answer : answer + answer.charAt(newIdLength - 1).repeat(3 - newIdLength);
}