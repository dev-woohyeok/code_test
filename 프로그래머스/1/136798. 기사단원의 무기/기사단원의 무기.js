function solution(number, limit, power) {
    // 1. 모든 숫자의 약수 개수 계산
    const divisorsCount = Array(number + 1).fill(0);
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisorsCount[j]++;
        }
    }

    // 2. 철의 무게 계산
    let totalWeight = 0;
    for (let i = 1; i <= number; i++) {
        if (divisorsCount[i] > limit) {
            totalWeight += power; // 제한 초과 시 고정 공격력 사용
        } else {
            totalWeight += divisorsCount[i]; // 제한 이하 시 약수 개수 사용
        }
    }

    return totalWeight;
}