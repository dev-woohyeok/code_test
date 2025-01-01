function solution(survey, choices) {
    const arr = [
        "R","T",
        "C","F",
        "J","M",
        "A","N",
    ]; // 성격 지표
    const scores = new Map(arr.map(key => [key, 0])); // 성격 지표 점수
    const points = ["", 3, 2, 1, 0, 1, 2, 3]; // 점수 환산
    
    for(const [i, pair] of survey.entries()){
        const choice = choices[i]; // 선택지
        const point = points[choice]; // 반영 점수
        const [key1, key2] = [...pair]; // 매칭해야하는 점수
        if(choice < 4){ // 점수 반영하기
            scores.set(key1, scores.get(key1) + point);
        }else if(choice > 4 ){
            scores.set(key2, scores.get(key2) + point);
        }
    }
    
    let result = "";
    result += scores.get("R") >= scores.get("T") ? "R" : "T";
    result += scores.get("C") >= scores.get("F") ? "C" : "F";
    result += scores.get("J") >= scores.get("M") ? "J" : "M";
    result += scores.get("A") >= scores.get("N") ? "A" : "N";
    
    return result;
}
// 풀이
// 