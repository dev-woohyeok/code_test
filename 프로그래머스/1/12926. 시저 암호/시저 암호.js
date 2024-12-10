function isUpper(u_code) {
    return 90 >= u_code && u_code >= 65
}

function isLower(u_code) {
    return 122 >= u_code && u_code >= 97
}

function solution(s, n) { // 65 ~ 90, 97 ~ 122
    return s.split("")
        .map((str) => {
            let u_code = str.codePointAt(0); // 유니코드
       if (!isUpper(u_code) && !isLower(u_code)) return str; // 대문자/소문자가 아니면 그대로 반환
            if (isUpper(u_code)) {
                return String.fromCodePoint(((u_code - 65 + n) % 26) + 65);
            }
            if (isLower(u_code)) {
                return String.fromCodePoint(((u_code - 97 + n) % 26) + 97);
            }
        }).join("");
}