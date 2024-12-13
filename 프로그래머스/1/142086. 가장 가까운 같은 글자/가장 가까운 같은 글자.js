function solution(s) {
    const last_index = {};
    return s.split("").map((char, index) => {
        if (last_index[char] === undefined) {
            last_index[char] = index; // 현재 문자의 첫 위치 저장
            return -1; // 첫 번째 등장인 경우
        } else {
            const distance = index - last_index[char]; // 현재 위치와 마지막 위치 간 거리
            last_index[char] = index; // 마지막 위치를 갱신
            return distance;
        }
    });
}