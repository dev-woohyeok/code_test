// number 에서 랜덤으로 3개 뽑아서 더했을때 0이면 삼총사라고함
// 위치와는 상관없이 3개 뽑아서 합치면 0 일때

// 123 124 125  => a = 1 일때, b = a + 1이고 c = a + 2 부터 n 까지 반복 
// 234 235 =>  a = 2일때, b= a + 1이고, c =  a + 2  부터 n 까지 반복
// 345 => n-2 까지
function solution(number) {
    let count = 0;
    for (let a = 0; a < number.length - 2; a++) {
        for (let b = a + 1; b < number.length - 1; b++) {
            for (let c = b + 1; c < number.length; c++) {
                if (number[a] + number[b] + number[c] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}