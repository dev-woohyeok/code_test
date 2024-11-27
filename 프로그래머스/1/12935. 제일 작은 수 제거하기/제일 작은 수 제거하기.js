// 1.최소값 찾기
// 2.최솟값 제거
// 3.길이 체크
function solution(arr) {
    const minValue = Math.min(...arr);
    const minArray = arr.filter((num) => num !== minValue);
    return minArray.length <= 1 ? [-1] : minArray;
}