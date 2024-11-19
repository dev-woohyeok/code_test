function solution(numbers) {
    // array numbers -> 배열 훌꼬, 다 더하고, length 만큼 나누면 평균
    var answer = 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    answer = sum / numbers.length;
    return answer;
}