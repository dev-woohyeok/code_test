// 매개변수는 정수
// 자릿수를 큰것 부터 작은 것으로 정렬한 새로운 정수를 반환
// 정수를 스트링으로 변환하고, 순서를 뒤집고, join으로 합친다음 리턴

function solution(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}