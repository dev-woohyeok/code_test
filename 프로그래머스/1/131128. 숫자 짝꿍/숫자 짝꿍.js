// 두  정수 x, y  (0 ~ 9) 중 가장 큰 두 수를 짝궁
// 공통정수만 짝궁, 없으면 -1 
// 숫자 카운팅, 비교 
function solution(X, Y) {
    // 숫자 카운팅 배열
    const counts_x = Array(10).fill(0);
    const counts_y = Array(10).fill(0);
    
    // 각 숫자 빈도 계산
    [...X].forEach(num => counts_x[num]++);
    [...Y].forEach(num => counts_y[num]++);  
    
    let result = ""; // 결과 문자열
    
    // 0 ~ 9 까지 공통숫자 처리
    for(let i = 9; i >= 0; i--){
        const common_count = Math.min(counts_x[i], counts_y[i]);
        result += i.toString().repeat(common_count);
    }
    
    if(result === "") return "-1"; // 빈배열처리
    if(result[0] === "0") return "0"; // 0 중복처리
    
    return result;
}