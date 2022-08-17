const solution = (phone_number) => {
  const answer = phone_number.slice(-4).padStart(phone_number.length, '*');
  return answer;
}