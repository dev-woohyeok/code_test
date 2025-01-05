
function solution(park, routes) {
    // park : 공원 배열, routes : 실행 명령어
    // S : 시작, O : 이동가능, X: 이동불가능
    const parkHeight = park.length;
    const parkWidth = park[0].length; 
    
    // 공원 좌표 - 상태 매핑
    const parkMap = new Map(park.flatMap((park, hei) => [...park]
                                         .map((state, wid) => [`${hei}_${wid}`, state])));
    // 현재 좌표
    let currentPos = park.flatMap((park, hei) => [...park]
                                .map((state, wid) => 
                                     state === "S" ? [hei, wid] : null)).find(Boolean);
    
    // 이동 방향
    const directions = {
       "N" : [-1, 0],
       "S" : [1, 0],
       "W" : [0, -1],
       "E" : [0, 1],
    };
    
    for(const route of routes){
        let [direction, moveStr] = route.split(" ");
        let [curHeight, curWidth] = currentPos;
        const [dy, dx] = directions[direction]; // 이동 방향      
        const move = Number(moveStr);
        let isUpdate = true;
        
        for (let step = 1; step <= move; step ++){ // 한칸씩 순회
            const nextHeight = curHeight + step * dy ;
            const nextWidth = curWidth + step * dx;
            
            const isOutOfPark = nextHeight < 0 || nextHeight >= parkHeight || 
                                nextWidth < 0 || nextWidth >= parkWidth;
            
            const isBlocked = parkMap.get(`${nextHeight}_${nextWidth}`) === "X";
                
            if(isOutOfPark || isBlocked) {
                isUpdate = false;
                break;
            }
        }
        
        if(isUpdate){
            currentPos = [curHeight + move * dy, curWidth + move * dx];
        }
    }   
    
    return currentPos
}