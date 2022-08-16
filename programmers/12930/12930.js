const solution = (s) => {
  const words = s.split(' ');
  const newWords = words.map((word) => {
    const newWord = [...word].map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    }).join('');
    return newWord;
  });
  const answer = newWords.join(' ');
  return answer;
};
