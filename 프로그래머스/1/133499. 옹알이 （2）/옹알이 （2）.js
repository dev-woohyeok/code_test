function solution(babbling) { // 1차 풀이 실패 : 연속 발음 불가 고려 X
    const says = ["aya", "ye" , "woo", "ma"]; // 아이가 발음 할 수 있는 단어
    const count = babbling.filter(say => { // 발음 조합
        let preSay = ""; // 이전 발음 저장
        let tempSay = say;
        
        for(const say of says){
            // 연속 발음 불가
            if(tempSay.includes(say + say)){
                return false;
            }
            // 단어 발음 제거
            tempSay = tempSay.split(say).join(" ");
        }
        // 단어가 공백인지 확인
        return tempSay.trim() === "";
    }).length;

    return count;
}