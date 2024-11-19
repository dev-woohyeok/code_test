function solution(n)
{
    var answer = 0;
    // 다른 사람들은 toString 대신에 문자열 과 연산해서 문자열로 타입을 바꾸는데 이게 맞는건가? 효율적인건가? 
    // toString()과 효율성 차이는 미미하다면, 명확하고 안전한 방법에 가독성이 좋은 toString() 을 사용해서 변환하는게 좋은것같다.
    // 알아만 두자 + "" 로 자동 타입 변환할 수도있다.
    let digits = n.toString().split(''); // 각 자리 쪼개기
    answer = digits.reduce((sum,digit) => sum + parseInt(digit), 0)
    return answer;
}