// 두 숫자를 1부터 순서대로 나눴을때 0이 안생기는것 둘 중에 가장 큰 숫자
function minDivisor(num1,num2){
    let result = 0;
    for(let i = 1; i <= Math.min(num1,num2); i++){
        if(num1 % i === 0 && num2 % i === 0 ){
            result = i;
        }
    }
    return result;
}

// 배수중에 가장 작은 숫자
function maxMutiple(num1, num2, divisor){
    // 최대 공약수가 1보다 크면 돌 중 큰 수
    // 최대 공약수가 1보다 작으면 둘의 곱 -> 아님 뭘까? 
    // 최소 공배수이면 둘다 배수인데, 2배 3배 4배 배수라는건 약수 아닌가? 
    // 배수라는건 다른말고 그값이 약수라는거 최대 공약수로 두 값의 곱을 나누면 최대 공배수다
    return divisor > 1 ? num1 * num2 / divisor : num1 * num2;
}

function solution(n, m) {
    const min = minDivisor(n,m);
    const max = maxMutiple(n,m,min);
    return [min, max]
}