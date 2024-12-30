function solution(s) {
    const arr = [...s];
    let count = 0; // 분리된 문자열의 개수
    let countX = 0; // x와 같은 글자의 개수
    let countNotX = 0; // x와 다른 글자의 개수
    let x = ""; // 현재 기준 문자

    for (let i = 0; i < arr.length; i++) {
        if (countX === 0 && countNotX === 0) {
            // 새로운 기준 문자 설정
            x = arr[i];
        }

        // 기준 문자와 같은 경우
        if (arr[i] === x) {
            countX++;
        } else {
            // 기준 문자와 다른 경우
            countNotX++;
        }

        // 분리 조건: countX와 countNotX가 같아질 때
        if (countX === countNotX) {
            count++; // 분리 개수 증가
            countX = 0; // 카운터 초기화
            countNotX = 0;
        }
    }

    // 남은 문자열 처리
    if (countX !== 0 || countNotX !== 0) {
        count++;
    }

    return count;
}

// s : 문자열

// 목표 : 문자열들을 분해하고 분해한 문자열의 개수를 return

// 규칙 1 : 첫글자를 읽고 x라고 함
// 규칙 2 : 문자열을 왼쪽에서 오른쪽으로 읽어나가면서 x 와 다른 단어들이 나온 횟수를 카운트함
//         처음으로 두 숫자가 같아졋을때, 멈추고 문자열을 분리함
// 규칙 3 : s에서 분리한 문자열을 뺴고 남은 부분에서 이 과정을 반복함, 남은 부분이 없다면 종료
// 규칙 4 : 두 횟수가 다른 상태에서 더이상 읽을 글자가 없다면, 분리하고 종료