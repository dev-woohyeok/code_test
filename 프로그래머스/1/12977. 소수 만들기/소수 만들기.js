function isPrime(n) { 
    if (n < 2) return false; 
    if (n === 2) return true; // 2는 소수
    if (n % 2 === 0 ) return false; // 짝수 제거
    // 제곱근이 존재하는 경우 소수가 아님으로 제곱근보다 작은 숫자들만 비교하면됨
    for(let i = 3; i <= Math.sqrt(n); i += 2) { // 홀수만 비교
        if(n % i === 0 ) return false;
    }
    return true;
}

// 3개의 숫자를 선택하는 조합 생성
const getCombinations = (arr, length) => {
    if (length === 1) return arr.map(el => [el]);
    return arr.flatMap((el, idx) =>
        getCombinations(arr.slice(idx + 1), length - 1).map(comb => [el, ...comb])
    );
};

function solution(nums) {
    let count = 0; // 소수 갯수
    
    // 조합 생성
    const combinations = getCombinations(nums, 3);
    // 조합의 합이 소수인지 확인
    combinations.forEach(comb => {
        const sum = comb.reduce((acc, val) => acc + val, 0);
        if (isPrime(sum)) count++;
    });
    return count;
}