function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let digits = n.toString().split(''); // 각 자리 쪼개기
    answer = digits.reduce((sum,digit) => sum + parseInt(digit), 0)
    return answer;
}