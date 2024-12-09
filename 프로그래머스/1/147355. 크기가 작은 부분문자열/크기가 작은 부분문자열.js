function solution(long, short) {
    const len_long = long.length;
    const len_short = short.length;
    const num_standard = parseInt(short);
    let count = 0;
    
    for(let i = 0; i <= len_long - len_short; i++){
        const num_compare = parseInt(long.slice(i, i + len_short));
        if(num_standard >= num_compare) {count++;}
    }
    
    return count;
}