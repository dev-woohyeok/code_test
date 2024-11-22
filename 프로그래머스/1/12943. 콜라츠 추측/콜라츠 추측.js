// 입력된 숫자가 짝수 n % 2 === 0 
// 입력된 숫자가 홀수 n * 3 + 1
// 1이 될떄까지 반복 while( n !== 1){}
// 반복 횟수 반환이 필요함, steps 변수 추가
// 500 횟수가 넘으면 -1 을 반환 

function solution(num) {
    let steps = 0;
    while (num !== 1) {
        if (steps > 500) return -1;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        steps++;
    }
    return steps;
}