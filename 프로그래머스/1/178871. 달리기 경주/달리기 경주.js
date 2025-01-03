function solution(players, callings) {
    // 검색을 위한 이름-인덱스 매핑 맵 초기화
    const mapRank = new Map(players.map((player, idx)=> [player, idx]));
    
    for(const [idx, call] of callings.entries()){ // 호출 목록 순회
        const callerIdx = mapRank.get(call); // 호출된 선수 인덱스
        const passerIdx = callerIdx - 1; // 바로 앞 순위 선수 인덱스
        if(passerIdx >= 0){
            // 순위 반영
            const passerName = players[passerIdx];
            players[passerIdx] = players[callerIdx];
            players[callerIdx] = passerName;
            
            // 맵 인덱스 업데이트
            mapRank.set(call, passerIdx);
            mapRank.set(passerName, callerIdx);
        }
    }
    
    return players;
}