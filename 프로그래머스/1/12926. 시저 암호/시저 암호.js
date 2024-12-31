function solution(s, n) { // s: 문자열, n: 미는 위치
    const code_A = "A".codePointAt(0);
    const code_a = "a".codePointAt(0);
    const code_Z = "Z".codePointAt(0);
    const code_z = "z".codePointAt(0);
    let answer = "";
    
    for(const char of s){// 밀기 
        let code = char.codePointAt(0);
        let move = code + n;
        let rest = code_z - code_a + 1;
        
        if(code >= code_a && code <= code_z){  // 대문자 처리
            code = move > code_z 
                ? code = ((move - code_a) % rest) + code_a
                : move;
        }else if(code >= code_A && code <= code_Z){ // 소문자 처리 
            code = move > code_Z
                ? code = ((move - code_A) % rest) + code_A
                : move;
        }
        answer += String.fromCodePoint(code);
    }
    
    return answer;
}