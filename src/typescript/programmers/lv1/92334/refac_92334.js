// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 신고결과 받기
function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((r) => r.split(' '));
  const reportCounts = new Map();

  reports.forEach((report) => {
    const [userId, targetId] = report;
    reportCounts.set(targetId, reportCounts.get(targetId) + 1 || 1);
  });

  const reportsMoreThanCount = new Map();
  reports.forEach((report) => {
    const [userId, targetId] = report;
    if (reportCounts.get(targetId) >= k) {
      reportsMoreThanCount.set(userId, reportsMoreThanCount.get(userId) + 1 || 1);
    }
  });
  const answer = id_list.map((id) => reportsMoreThanCount.get(id) || 0);
  return answer;
}
