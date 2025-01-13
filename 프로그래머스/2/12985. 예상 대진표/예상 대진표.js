// 토너먼트 1~N, 1-2, 3-4, 이런식으로 게임 진행
// 1-N/2 번 승리한 사람이 앞번호
// n: 참가자수, a: 내번호, b: 상대 번호
function solution(n,a,b){
    // 홀짝 여부
    // 둘의 차이가 같은지
    // n 을 기준으로 반복이고
    // 내번호 중 이긴거 /2 의 반올림이겟네 
    let round = 1;
    const getNextRank = (number) => Math.ceil(number / 2);
    
    // 두 번호가 서로 대결할떄까지 반복
    while(Math.abs(a - b) !== 1 || Math.min(a, b) % 2 !== 1) {
        a = getNextRank(a);
        b = getNextRank(b);
        round++;
    }
    
    return round;
}