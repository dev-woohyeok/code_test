function solution(num) {
    if (num <= 0) return -1; // 0이나 음수는 처리 불가 (문제 조건에 따라 다를 수 있음)

    let steps = 0;
    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        steps++;
    }
    return steps;
}