function solution(s) {
    const result = s.split(" ")
    .map(str => 
         [...str].map((char, idx) => idx === 0 ? char.toUpperCase() : char.toLowerCase() ).join(""))
    .join(" ")
    
    return result;    
}