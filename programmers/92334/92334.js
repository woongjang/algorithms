// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 신고결과 받기
function solution(id_list, report, k) {
  let answer = Array.from({ length: id_list.length }, (v) => 0);
  const uniqueArray = [...new Set(report)];
  const reportMap = new Map(
    id_list.map((id) => [id, { count: 0, users: [] }])
  );
  uniqueArray.forEach((reportInfo) => {
    const [userId, targetId] = reportInfo.split(' ');
    const { count, users } = reportMap.get(targetId);
    reportMap.set(targetId, {
      count: count + 1,
      users: [...users, userId],
    });
  })
  reportMap.forEach((value, key) => {
    if (value.count < k) return;
    value.users.forEach((user) => {
      const userIndex = id_list.indexOf(user);
      answer.splice(userIndex, 1, answer[userIndex] + 1);
    })
  });
  return answer;
}
