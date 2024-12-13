
// a 필요한 빈병, b 받는 콜라병 , n 가져다주는 빈병수 
function solution(a, b, n) {
    let total = 0; // 총 병의 갯수
    
    while (n >= a){ // 더이상 빈병으로 콜라를 못받을때
        const count = Math.floor(n / a); // 콜라를 받을 수 있는 숫자
        const get_bottles = b * count ; // 얻은 콜라 숫자
        n = (n - count * a) + (b * count); // 빈병에서 콜라로 바꾼 만큼 제외하고, 얻은 콜라 만큼 추가
        total += count * b; // 총 얻은 콜라 수
    }
    
    return total;
}