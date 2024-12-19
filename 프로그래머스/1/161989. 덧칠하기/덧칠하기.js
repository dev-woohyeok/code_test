
function solution(n, m, section) {
    let count = 0; // 롤러 사용 횟수
    let end = 0; // 페인트가 칠해진 영역
    
    for(num of section) {
        if(num > end){ // 페인트가 칠해지지 않았다면
            end = num + m - 1; // 페인트 칠하기
            count++; // 횟수 적용
        }
    }
    return count;
}