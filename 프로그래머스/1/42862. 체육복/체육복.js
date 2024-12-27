function solution(n, lost, reserve) {
    // 체육복을 잃어버렷지만 여분의 체육복이 있는 경우 제외
    // 오름차순으로 정렬 안할시 반례가 생김
    let realLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
    let realReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
    
    for (const student of realLost){
        const posGo = student - 1;
        const posBack = student + 1;
        
        if(realReserve.includes(posGo)){ // 앞번호에서 빌리는 경우 
            realReserve = realReserve.filter(v => v !== posGo);
        }else if(realReserve.includes(posBack)){ // 뒷번호한테 빌리는 경우
            realReserve = realReserve.filter(v => v !== posBack);
        }else{ // 빌리지 못한 경우
            n--;
        }
    }
    
    return n;
}
// 반례 case 13 
// 입력값 〉 5, [4, 2], [3, 5]
// 기댓값 〉 5

// want
// n 명의 학생중, lost 는 체육복을 가져오지 않은 학생 , reserve 는 여분의 체육복을 가져온 학생
// 조건 1. reserve 학생은 자신의 앞뒤번호의 학생에게만 체육복을 빌려 줄 수 잇음
// 조건 2. 체육복은 1개만 빌릴 수 있음 
// 체육수업을 들을 수 있는 학생의 최대값을 반환함

// solving
// 1. 체육복을 잃어버렸는데, 여분을 가지고 있는 경우
// 2. 앞번호에서 빌리는 경우 제외
// 3. 뒷번호에서 빌리는 경우 제외