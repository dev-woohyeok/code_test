// keymap : '순서대로' 담긴 문자열
// target : 입력하려는 문자열

// 목표
// 문자열 작성을 위해 최소한 몇번씩 눌러야하는지를 담은 배열을 구해라

// 규칙
// 1. 문자는 무작위
// 2. 같은 문자가 여러 자판에 중복할당 O
// 3. 같은 문자가 하나의 key 에 중복할당 O
// 4. 할당 안되는 경우도 있음
// 5. 작성 안되는 경우 -1
function solution(keymap, targets) {
    let answer = []; // 최소 정답 배열
    let keys = {}; // 최소 입력 문자 횟수 모음
    let count = 0; // 카운팅
    
    // 최소 입력 가능한 문자들의 위치 반영
    for(const key of keymap) {
        [...key].forEach((char, idx) => {
            if(keys[char] === undefined){
                keys[char] = idx;
            }else{
                if(keys[char] > idx) keys[char] = idx;
            }
        });
    }
    console.log(keys);
    
    for(const target of targets){
        for (const char of target){
            if(keys[char] === undefined){
                answer.push(-1);
                count = 0;
                break;
            }else{
                count += keys[char] + 1;
            }
        }
        if(count != 0) {
            answer.push(count);
            count = 0;
        }
    }
    
    return answer;
}