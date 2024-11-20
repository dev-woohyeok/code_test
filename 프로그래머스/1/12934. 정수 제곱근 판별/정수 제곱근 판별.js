// n 이 어떠한 정수의 제곱근이 아닌지 판단 
function solution(n) {
    const sqrt = Math.sqrt(n); // 제곱근을 구함
    // 삼항연산자를 사용하여 정수면 (x + 1) 의 제곱근을 리턴 
    // 정수가 아니면 -1 을 리턴
    return Number.isInteger(sqrt) ? (sqrt + 1 ) ** 2 : -1; 
}