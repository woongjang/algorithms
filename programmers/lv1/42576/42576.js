const solution = (participant, completion) => {
  
  const answer = completion.reduce((result, curr, idx) => {
    const completionIndex = result.indexOf(curr);
    result.splice(completionIndex, 1);
    return result;
  }, participant);
  return answer[0];
};
