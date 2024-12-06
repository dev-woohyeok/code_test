// 01 02 10 11 12 20 21 22 100
// 3 9 27 81 3의 배수로 나눔
// 일단 n이 3의 거듭제곱 보다 큰지 작은지 확인
// 순차적으로 뺌 언제까지 제곱크기 보다 작아질때까지

// 1. 최대길이를 구해야겟지? 
function maxLength(num){
    let result = 0;
    while ( num >= 3 ** result ){
        result ++;
    }
    return result - 1; // 해당 결과보다 1작은 값이 최대 3진법 자릿수
}

// 2. 3진법으로 변환해야겠지? num 을 해당자릿수에서 값을 뻄
function getNum3(num) {
    let result = "";
    let max = maxLength(num);
    for (let i = max; i >= 0; i--) { // 3진법 변환
        let count = Math.floor(num / 3 ** i); // 현재 자리에서 뺄 수 있는 최대 횟수 계산
        num -= count * 3 ** i; // 그만큼 빼기
        result += count; // 결과에 추가
    }
    return result;
}

function getNum10(num) {
    return num
        .split("") // 반전값 배열로 변환
        .reduce((acc, cur, idx, arr) => 
                acc + parseInt(cur) * 3 ** (arr.length - 1 - idx ), 0);
}

function solution(n) {
    const reverse = getNum3(n).split("").reverse().join(""); // 3진법 변환 후 뒤집기
    return getNum10(reverse);
}