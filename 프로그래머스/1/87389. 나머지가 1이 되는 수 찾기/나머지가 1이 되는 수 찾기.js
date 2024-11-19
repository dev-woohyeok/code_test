function solution(n) {
    var answer = 0;
    // n 을 x 로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x
    // 1부터 n 까지 중에 나눳을때 나머지가 1인게 처음 나오는게 가장 작은 자연수
    for (let i = 1; i < n; i++) {  // 1부터 n-1까지 확인
        if (n % i === 1) {  // 나머지가 1인 경우
            answer = i;
            break;  // 첫 번째로 찾은 값이 가장 작은 값이므로 바로 종료
        }
    }
    return answer;
}
// 왜 for 문만 생각했지? whlie 문을 사용하면 더 효율적으로 해결할수있었음
// let x = 1;
// while ( x ++ ) {
// if(n % x === 1) {
//        return x;
//    }
//}