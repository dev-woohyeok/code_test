function solution(a, b){
    const start = Math.min(a,b);
    const end = Math.max(a,b);
    return (start + end ) * (end - start + 1) / 2;
}