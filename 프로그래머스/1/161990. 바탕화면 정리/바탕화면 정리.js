function solution(wallpaper) {
    const start = [Infinity, Infinity]; // 최소값 계산을 위한 초기값 설정
    const end = [-Infinity, -Infinity]; // 최대값 계산을 위한 초기값 설정
    const file = '#';

    for (const [i, line] of wallpaper.entries()) {
        const startX = line.indexOf(file);
        const endX = line.lastIndexOf(file);

        if (startX !== -1) { // 파일이 존재하는 라인일 경우
            start[0] = Math.min(start[0], i); // y축 최소값
            start[1] = Math.min(start[1], startX); // x축 최소값
            end[0] = Math.max(end[0], i); // y축 최대값
            end[1] = Math.max(end[1], endX); // x축 최대값
        }
    }

    // 마지막 y축은 포함해야 하므로 1을 더함
    return [start[0], start[1], end[0] + 1, end[1] + 1];
}