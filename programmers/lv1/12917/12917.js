const solution = (s) => {
  return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
};
