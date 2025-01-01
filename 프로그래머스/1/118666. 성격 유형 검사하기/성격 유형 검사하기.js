function solution(survey, choices) {
    const MBTIs = ["RT","CF","JM","AN"]; // MBTI 유형들
    const scores = new Map(MBTIs.flatMap(([key1, key2]) => [[key1, 0], [key2, 0]])); // 점수 반영
    
    for(const [i, MBTI] of survey.entries()){ // 검사 반영
        const choice = choices[i]; // 검사결과
        const [key1, key2] = MBTI; 
        if(choice < 4) {
            scores.set(key1, scores.get(key1) + Math.abs(choice - 4));
        }else if(choice > 4){
            scores.set(key2, scores.get(key2) + Math.abs(choice - 4));
        }
    }
    
    return MBTIs
    .map(([key1, key2]) => scores.get(key1) >= scores.get(key2) ? key1 : key2)
    .join("");
}
// 풀이
// 