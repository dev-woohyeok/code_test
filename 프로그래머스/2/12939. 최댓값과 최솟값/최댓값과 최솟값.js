function solution(s) {
    const result = s.split(" ")
        .sort((a, b) => a - b)
        .filter((_, idx, arr) => idx === 0 || idx === arr.length - 1 )
        .join(" ")
    
    return result;
}