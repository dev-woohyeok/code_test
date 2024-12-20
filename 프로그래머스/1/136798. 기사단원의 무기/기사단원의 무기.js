function get_divisor_count(num) { 
    // 1. 소인수 분해
    const multiples = {}; // 소인수와 그 지수를 저장할 객체

    for (let i = 2; i <= num; i++) {
        while (num % i === 0) { // i 로 나누어떨어질 때까지 반복
            if (multiples[i] === undefined) {
                multiples[i] = 1; // 처음 등장한 소인수는 1로 초기화
            } else {
                multiples[i] += 1; // 소인수가 반복되면 지수 증가
            }
            num /= i; // num을 나누어 업데이트
        }
    }

    // 2. (지수 + 1)을 곱해 약수의 개수를 구하기
    let totalFactors = 1;
    for (const divisor in multiples) {
        totalFactors *= (multiples[divisor] + 1); // 각 소인수의 지수에 1을 더하고 곱하기
    }

    return totalFactors; // 약수의 개수 반환
}

function solution(number, limit, power) {
    let result = 1; // 준비해야하는 철의 양 (1번 생략)
    for(let i = 2; i <= number; i ++) {
        const count = get_divisor_count(i); // 약수의 갯수
        if(count > limit) { // 초과 여부 판단
            result += power; 
        }else{
            result += count;
        }
    }
    return result;
}