function solution(s) {
    const regex = /^\d+$/; // 숫자인지 여부 판단
    return (s.length === 4 || s.length === 6) && regex.test(s);
}