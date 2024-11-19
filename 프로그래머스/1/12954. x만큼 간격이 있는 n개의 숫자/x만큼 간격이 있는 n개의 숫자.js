// 정수 x , 자연수 n , x부터 x 씩 증가하는 숫자 n개 를 가지는 리스트? 
// x * n ->  push array
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n ; i ++){
        answer.push(x * i);
    }
    return answer;
}