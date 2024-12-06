function solution(s) {
    return s.split(" ")
            .map((str, idx) =>
                 str.split("").map((str,idx) => idx % 2 === 0 
                                        ? str.toUpperCase()
                                        : str.toLowerCase()
                                  ).join("")
            ).join(" ");
}
