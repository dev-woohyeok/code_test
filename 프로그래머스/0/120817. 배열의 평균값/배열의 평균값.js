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
// reduce 를 사용해서 표현 가능
// a + b + c + d 딱딱닥!그리고 길이로 딱 나누면 평균값 크 
//function solution(numbers) {
//    var answer = numbers.reduce((a(누적값),b(현재배열값)) => a+b, 0(초기값)) / numbers.length;
//    return answer;
//}
