function solveSimulation(diffs, times, limit, level) {
    const n = diffs.length;
    let consumedTime = 0;

    for (let i = 0; i < n; i++) {
        const diff = diffs[i];
        const timeCur = times[i];
        const timePrev = i > 0 ? times[i - 1] : 0;

        if (level >= diff) {
            // 퍼즐을 틀리지 않은 경우
            consumedTime += timeCur;
        } else {
            // 퍼즐을 틀린 경우
            const failedSolve = diff - level;
            let solvedTime = timeCur * failedSolve; // 현재 문제를 도전한 시간
            solvedTime += timePrev * failedSolve; // 이전 문제를 도전한 시간
            solvedTime += timeCur; // 현재 문제를 해결한 시간
            consumedTime += solvedTime;
        }

        // 제한시간 초과
        if (consumedTime > limit) {
            return false;
        }
    }

    return true; // 제한시간 준수
}

function solution(diffs, times, limit) {
    let low = 1;
    let high = diffs.reduce((acc,cur) => Math.max(acc,cur),1);

    while (low <= high) {
        const midLevel = Math.floor((low + high) / 2);
        const result = solveSimulation(diffs, times, limit, midLevel);

        if (result) {
            high = midLevel - 1; // 성공적이라면 더 낮은 숙련도로 시도
        } else {
            low = midLevel + 1; // 실패했다면 더 높은 숙련도로 시도
        }
    }

    return low;
}
