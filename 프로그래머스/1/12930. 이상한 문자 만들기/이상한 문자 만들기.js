function solution(s) {
    return s.split(" ")
            .map((str, idx) => {
                return str.split("")
                          .map((str,idx) => {
                                return idx % 2 === 0 
                                            ? str.toUpperCase()
                                            : str.toLowerCase()})
                           .join("");
            }).join(" ");
}