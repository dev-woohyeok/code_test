function solution(arr) {
    // 최대공약수를 구하면서, 최소공배수를 배열로 순환하면서 구하면됨

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}