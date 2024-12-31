// s : 문자열
// skip : 제외해야하는 문자열
// index : 건너 뛰어야하는 값

// want
// 규칙대로 계산한 문자열 반환

// solve
// 문자열 S 의 각 알파벳을 index 뒤에 알파벳으로 바꿈
// index 만큼의 뒤의 알파벳이 z 로 넘어가면 a로 돌아감
// skip 을 제외한 알파벳은 제외히고 건너뜀
// limit 
// skip 은 소문자로만, s 포함 X, 중복에 대한 언급 따로 없음 (중복처리 필요)
// s와 skip 은 소문자로만 이루어짐

function solution(s, skip, index) {
    let answer = "";
    const codeA = "a".codePointAt(0); // 시작점
    const codeZ = "z".codePointAt(0); // 끝점
    const skips = new Set( [...skip].map(char => char.codePointAt(0)) ); // 스킵 문자열들
    
    for(const char of s){
        let code = char.codePointAt(0); // 변경전 문자의 유니코드
        let steps = 0; // 건너뛴 횟수 
        
        while(steps < index){
            code ++; // 다음 문자
            if(code > codeZ) code = codeA; // 초과시 처리
            if(!skips.has(code)) steps++ // skips 가 아닌 문자는 넘어감
        }
        answer += String.fromCharCode(code); // 최종 문자 추가
    }
    
    return answer;
}