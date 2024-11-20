
// 반복문으로 5,4,3,2,1 을 순서대로 만들고, Push해서 넣으면 되긴함
// 기존에 배운 태크닉을 써보자
//function solution(n) {
//    return Array(n).fill(1).map((num,i) => num * (n - i) );
//}

// 아... 자연수 n 임 쉣
function solution(n) {
    let answer = 0;
    const digits = n.toString().split('');// 자리수 분리
    // a-b 올림차순 b-a 내림차순
    // a - b 가 음수면 a 가 양수면 b 가 옴 -> 이말을 해석하면 작은 값이 앞에 온다는거임 
    // 1 ,3  1 - 3 은 음수 면 1이 앞에 3이 뒤에 그럼 작은 값이 앞에있음
    answer = digits.reverse().map(Number);
    return answer;
}
