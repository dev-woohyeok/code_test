function solution(absolutes, signs) {
    return absolutes.reduce((cur,num,idx) => cur + (signs[idx] ? num : -num),0);
}