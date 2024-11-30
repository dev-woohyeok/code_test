function solution(a, b) {
    return a.reduce((cur,val,idx) => cur + (val * b[idx]),0);
} 