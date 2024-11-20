
// 반복문으로 5,4,3,2,1 을 순서대로 만들고, Push해서 넣으면 되긴함
// 기존에 배운 태크닉을 써보자
//function solution(n) {
//    return Array(n).fill(1).map((num,i) => num * (n - i) );
//}

function solution(n) {
	let answer = 0;
    const digits = n.toString().split(''); // 자리수 분리
    answer = digits.reverse().map(Number); // 배열을 뒤집고, 스트링을 다시 정수로 변한
    return answer;
}
