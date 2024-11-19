function solution(n) {
    var answer = 0;
    let divisors = [];
    // 약수? 나머지 없이 나눌수 있는 숫자 
    // n 이 주어졋을때, n을 1부터 n까지 하나씩 나눠서 , 나머지가 0 인 경우에만 배열에 담고
    // 배열에 담은걸 reduce로 다 더해서 반환하면 된다? 맞나? 
    for (let i = 1; i <= n; i ++) {
        if(n % i == 0){
            divisors.push(i);
        }
    }
    answer = divisors.reduce((sum, divisor) => sum + divisor , 0);
    
    return answer;
}
// 굳이 에 넣을 필요가 없네... 바로 합치면 되는데, 필요없는 작업인데, 추가했따.
//function solution(num) { 
//    let sum = 0;
//    for (let i = 1; i <= num; i++) {
//        if (num % i === 0) sum += i
//    }
//    return sum
//}