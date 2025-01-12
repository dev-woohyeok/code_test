function solution(brown, yellow) {
    // 카펫, 중앙애만 칠해져있고, 외각은 갈색으로 칠해짐
    // 노란색과 갈색의 갯수만을 알고있음
    
    // 가로길이는 세로와 같거나 세로길이보다 더 길다.
    // yello의 약수중에 가장 큰 값이 가로의 길이 아닌가?
    // 아 그러면 yellow를 한줄로 놓고 이거의 세로길이 + 2 , 가로길이 + 2 를 곱했을때, 판넬의 갯수가 토탈이면 ok
    
    const total = brown + yellow;
    for (let i = 1; i <= yellow; i ++){
        const width = (yellow / i) + 2;
        const height = i + 2;
        const area = width * height;
        
        if(area === total){
            return [width, height];
        }
    }
}