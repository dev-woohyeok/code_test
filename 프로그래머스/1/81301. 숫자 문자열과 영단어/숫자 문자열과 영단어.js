function solution(s) {
    // 문자열이 포함되어있나 체크
    const group_num = [
        "zero", 
        "one", 
        "two" ,
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    
    group_num.forEach((num, index) => {
        if (s.includes(num)) {s = s.replaceAll(num, index.toString())};
    })
    
    return parseInt(s);
}