// 매일 1명이 노래를 부름 -> 점수
// 상위 k 번째 이내면, 명예의 전당 입성
// 최하위 발표
function solution(k, score) {
    const owners = [];
    const result = [];
    // 배열의 길이가 k 보다 긴 경우 짧은 경우
    // 배열의 길이가 k 보다 길어졌어 -> 정렬 후 마지막 배열값 반환
    score.forEach((score) => {
        owners.push(score); // 명예의 전당에 추가
        owners.sort((a, b) => b - a); // 점수 대로 정렬
        if(owners.length > k) owners.pop();
        result.push(owners[owners.length - 1]);
    });
    return result;
}