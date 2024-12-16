// 2월 29일
// 1월 1일 은 금요일
// 1월 31 , 29 . 30, 31
// Date 를 통해서 하고, 요일 반환
// start => fri
// 요일 계산하고, 7로 나누면 되는거잔슴 Fri 로 시작하고

function solution(a, b) {
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const start = new Date(2016, 0,1);
    const now = new Date(2016,a - 1,b);
    console.log(`${(now - start) / (3600 * 24 * 1000)} - ${now}`);
    return days[((now - start) / (3600 * 24 * 1000)) % 7];
}