function solution(answers) {
    const answer1 = [1,2,3,4,5]; // 패턴1
    const answer2 = [2,1,2,3,2,4,2,5]; // 패턴2
    const answer3 = [3,3,1,1,2,2,4,4,5,5]; // 패턴3
    const scores = [0, 0, 0]; // 정답 여부
    
    answers.forEach((score, idx) => { // 각 학생별 정답 패턴과 정답 일치 여부 확인
       if(answer1[idx % answer1.length] === score) scores[0] += 1;
       if(answer2[idx % answer2.length] === score) scores[1] += 1;
       if(answer3[idx % answer3.length] === score) scores[2] += 1;
    });
    
    // 최대값 계산
    const max = Math.max(...scores);
    const result = [];
    scores.forEach((score, idx) => { // 최대값 중복 여부 체크
        if(score === max) result.push(idx + 1);
    });
    
    return result;
}