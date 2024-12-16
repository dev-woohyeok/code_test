function solution(a, b) {
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]; // 요일
	const month = [31,29,31,30,31,30,31,31,30,31,30,31]; // 월마다 요일 수
    // 두 날짜의 요일 차이 구하기, -1 하는 이유는 1월 1일 부터 시작이므로 1부터 시작
  	const result = month.slice(0, a - 1).reduce((acc,cur) => acc + cur, 0) + b - 1;
    // 금요일 보정
    return days[(result + 5) % 7];
}

console.log(solution(9,29));