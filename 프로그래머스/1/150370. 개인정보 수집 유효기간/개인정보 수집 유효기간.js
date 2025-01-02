// today : 오늘일짜, term : 약관-유효기간, privacies : 수집일자 - 약관종류
// 1달 28일 기준, 유효기간이 지난 약관 폐기
function solution(today, terms, privacies) {
    const result = []; // 파기대상
    
    // 오늘 날짜를 일단위로 변환 -> 1달은 28일
    const [yearT, monthT, dayT] = today.split(".").map(Number); 
    const totalDaysT = yearT * 12 * 28 + monthT * 28 + dayT; 
    
    // 약관 정보
    const termMap = new Map(terms.map(term => {
        const [type, duration] = term.split(" ")
        return [type, Number(duration) * 28];
    }));
    
    // 개인정보를 순회하며 파기 여부 파악 -> 등록가능일자 초과시 파기
    for(const [i, privacy] of privacies.entries()){
        const num = i + 1;
        const [date, termType] = privacy.split(" ");
        const [year, month, day] = date.split(".").map(Number);
        
        const totalDaysP = year * 12 * 28 + month * 28 + day; // 계약일
        const expireDay = totalDaysP + termMap.get(termType); // 만료일 

        if(expireDay <= totalDaysT){// 만료여부 판단
            result.push(num);
        }
    }
    return result;
}