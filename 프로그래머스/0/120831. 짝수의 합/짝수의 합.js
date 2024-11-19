function solution(n) {
    // n 이 주어졌을때, n 이하의 모든 짝수를 더한 값? 
    // n이 주어졌으면, 2 * 1  + 2 * n 까지 겟고
    // for 문으로 더하면 되네?
    var answer = 0;
    var number = n / 2;
    for (i = 1; i <= number; i++){
        answer += i * 2;
    }

    return answer;
}