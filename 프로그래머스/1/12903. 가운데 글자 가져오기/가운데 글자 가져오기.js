// 
function solution(s) {
    const len = s.length;
    return len % 2 !== 0 
        ? s[len - ((len + 1) / 2)] 
        : s[(len / 2) - 1] + s[len / 2]
}