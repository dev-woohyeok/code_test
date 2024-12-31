function solution(s){
    let countP = 0;
    let countY = 0;
    for(const char of s ){
        'p' === char.toLowerCase() && countP ++;
        'y' === char.toLowerCase() && countY ++;
    }
    
    return countP === countY;
}