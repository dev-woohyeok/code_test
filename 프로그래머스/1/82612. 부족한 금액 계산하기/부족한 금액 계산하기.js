// 원래 이용료 : price
// n 번째 이용료 : price * n
// 놀이기구 count 번을 타게 되면 얼마나 모자르는지 리턴


function solution(price, money, count) {
    let paid = 0;
    for ( let i = 1; i <= count; i++){
        paid += price * i;
    }
    
    return paid - money < 0 ? 0 : paid - money;
}