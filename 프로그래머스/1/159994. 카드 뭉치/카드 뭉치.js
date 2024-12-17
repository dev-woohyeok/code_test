// 순서대로, 다시 사용 X,  사용 안하면 다음카드 X, 순서 변경 X
function solution(cards1, cards2, goal) {
    // 위치 체크 
    const pos_cards = [0, 0];
    goal.forEach((str, idx) => {
        if(cards1[pos_cards[0]] === goal[idx]) { pos_cards[0] += 1;}
        if(cards2[pos_cards[1]] === goal[idx]) { pos_cards[1] += 1;}
    });
    console.log(pos_cards);
    return pos_cards[0] + pos_cards[1] === goal.length
        ? "Yes" 
        : "No";
}