function solution(arr, divisor) {
    const fillterd = arr.filter((num) => num % divisor === 0).sort((a,b) => a-b);
    return fillterd.length === 0 ? [-1] : fillterd;
}