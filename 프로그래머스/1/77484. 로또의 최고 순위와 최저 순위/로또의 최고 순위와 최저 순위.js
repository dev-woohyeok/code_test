function solution(lottos, win_nums) {
    const max_min = [7, 7]; // 최대,최소 순위

    for (const lotto of lottos) {
        if(lotto === 0) {max_min[0] --;} // 무조건 정답 적용(최대)
        if(win_nums.includes(lotto)) { // 로또 적답은 양쪽 모두 적용
            max_min[0] --;
            max_min[1] --;
        } 
    }
        
    return max_min.map(num => {
        if(num === 7) return 6;
        return num;
    });
}