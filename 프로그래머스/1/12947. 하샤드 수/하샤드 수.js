function solution(x) {
    const num = x.toString().split('').reduce((cur, val) => cur + Number(val), 0); 
    return x % num === 0;
}