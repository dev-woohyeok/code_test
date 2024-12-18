
function solution(k, m, score) {
    let max_gain = 0;
    const box_nums = Math.floor(score.length / m); // 상자 갯수
    score.sort((a, b) => b - a); // 사과점수 내림차순으로 정렬
    for(let i = 1; i <= box_nums; i++ ){
        max_gain += score[(i * m) - 1] * m; // 최저점수 사과 선별 이익계산
    }
    return max_gain; // 이익 반환
}