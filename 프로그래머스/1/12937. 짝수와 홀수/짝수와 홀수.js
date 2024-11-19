// 짝수는 Even, 홀수는 Odd
function solution(num) {
    var answer = '';
    answer = num % 2 == 0 ? "Even" : "Odd";
    return answer;
}