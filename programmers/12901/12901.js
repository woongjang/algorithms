const solution = (a, b) => {
  return new Date(2016, a - 1, b).toString().toUpperCase().slice(0,3);
};
