function solution(n, m, section) {
    let count = 0; // 롤러 사용 횟수
    let lastPainted = 0; // 마지막으로 칠한 구역의 끝

    for (let i = 0; i < section.length; i++) {
        // 현재 구역이 마지막으로 칠한 구역을 넘어섰다면 새 롤러 사용
        if (section[i] > lastPainted) {
            count++; // 롤러 사용 횟수 증가
            lastPainted = section[i] + m - 1; // 롤러가 커버하는 끝 구역 업데이트
        }
    }

    return count;
}