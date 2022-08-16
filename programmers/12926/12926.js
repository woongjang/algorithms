const solution = (s, n) => {
  const bigACode = 'A'.charCodeAt();
  const bigZCode = 'Z'.charCodeAt();
  const smallACode = 'a'.charCodeAt();
  const smallZCode = 'z'.charCodeAt();
  const answer = [...s].map((string) => {
    if (string === ' ') return ' ';
    const charCode = string.charCodeAt();
    let aCode = bigACode;
    let zCode = bigZCode;
    if (charCode <= smallZCode && charCode >= smallACode) {
      aCode = smallACode;
      zCode = smallZCode
    }
    let newCode = charCode + n;
    if (newCode > zCode) {
      newCode += (aCode - zCode - 1);
    }
    return String.fromCharCode(newCode);
  })
  return answer.join('');
}