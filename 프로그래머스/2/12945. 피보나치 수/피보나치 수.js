function solution(n) {
    let prev = 0;
    let curr = 1;
    for(let i = 2; i <= n; i++){
        const next = (prev + curr) % 1234567;
        prev = curr;
        curr = next;
    }
    return curr;
}
